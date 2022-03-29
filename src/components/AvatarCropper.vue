<template>
  <div class="AvatarUploader">
    <v-dialog
        persistent
        v-model="isVisible_editAvatarDialog"
        @close="$emit('closeAvatarCropper')"
        width="800">
      <v-card>
        <v-card-title class="text-h5">
          修改头像
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <el-row>
            <el-col :span="12" style="height: 300px">
              <vue-cropper
                  style="background-repeat: repeat"
                  ref="cropper"
                  :img="options.img"
                  :info="true"
                  :autoCrop="options.autoCrop"
                  :autoCropWidth="options.autoCropWidth"
                  :autoCropHeight="options.autoCropHeight"
                  :fixedBox="options.fixedBox"
                  :centerBox="options.centerBox"
                  @realTime="realTime">
              </vue-cropper>
              <div style="display: flex; padding-top: 20px">
                <el-upload
                    ref="uploadCropper"
                    :before-upload="beforeAvatarUpload"
                    :show-file-list="false"
                    action>
                  <v-btn text color="primary">上传头像</v-btn>
                </el-upload>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        @click="rotateLeft"
                        color="primary"
                        text
                        v-bind="attrs"
                        v-on="on">
                      <v-icon>mdi-arrow-u-down-left</v-icon>
                    </v-btn>
                  </template>
                  <span>向左旋转</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        @click="rotateRight"
                        color="primary"
                        text
                        v-bind="attrs"
                        v-on="on">
                      <v-icon>mdi-arrow-u-down-right</v-icon>
                    </v-btn>
                  </template>
                  <span>向右旋转</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        @click="changeScale(1)"
                        color="primary"
                        text
                        v-bind="attrs"
                        v-on="on">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </template>
                  <span>放大</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        @click="changeScale(-1)"
                        color="primary"
                        text
                        v-bind="attrs"
                        v-on="on">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </template>
                  <span>缩小</span>
                </v-tooltip>
              </div>
            </el-col>
            <el-col :span="12" style="height: 300px">
              <div class="upload-preview">
                <img
                    :src="previews.url"
                    :style="previews.img"
                    v-show="previews.url"
                />
              </div>
            </el-col>
          </el-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="error darken-1"
              text
              :disabled="loading"
              @click="$emit('closeAvatarCropper')">
            关 闭
          </v-btn>
          <v-btn
              color="primary darken-1"
              text
              :loading="loading"
              @click="submitUpdate">
            上 传
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {VueCropper} from 'vue-cropper'
import imgUpload from "@/rpc/grpc/upload/v1/upload_client";

export default {
  props: {
    visible: Boolean,
  },
  components: {VueCropper},
  watch: {
    visible(val) {
      this.isVisible_editAvatarDialog = val;
    }
  },
  data() {
    return {
      showCropper: true,
      isVisible_editAvatarDialog: this.visible,
      isVisible_previewAvatarDialog: false,
      options: {
        img: "", //裁剪图片的地址
        info: true, //裁剪框的大小信息
        outputSize: 1, // 裁剪生成图片的质量
        outputType: "", // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, //是否默认生成截图框
        autoCropWidth: 200, //默认生成截图框宽度
        autoCropHeight: 200,
        fixedBox: true, // 固定截图框大小 是否允许改变
        fixed: true, //是否开启截图框宽高固定比例
        fixedNumber: [1, 1], //截图框的宽高比例
        original: false, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      previews: {},
      loading: false,
      avatarName: "", //头像名，包含后缀
      avatarUrl: this.avatar, //头像服务端链接
      client_alioss: {},
    }
  },
  methods: {
    // 实时预览函数
    realTime(data) {
      this.previews = data;
    },
    beforeAvatarUpload(file) {
      let uploadAccept = ["jpeg", "jpg", "png"]; //上传图片允许的格式
      let ext = file.type.split("/")[1]; //后缀名
      if (!uploadAccept.includes(ext)) {
        this.$Vnotify.error("您上传的图片格式不符，请重新上传", 3000);
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.options.img = reader.result; //base64
      };
    },
    changeScale(num) {
      this.$refs.cropper.changeScale(num);
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    //删除服务器中的头像
    async deleteAvatar() {
      try {
        if (this.avatarUrl) {
          let {pathname} = new URL(this.avatarUrl);
          await this.client_alioss.deleteMulti([decodeURIComponent(pathname)]); //删除服务器中的头像。decodeURIComponent解决中文乱码
          this.$message.success("头像删除成功");
          this.avatarUrl = "";
          this.$emit("deleteAvatar");
        }
      } catch (error) {
        this.$message.error("头像删除失败");
      }
    },
    //上传头像
    async submitUpdate() {
      this.loading = true;

      this.$refs.cropper.getCropData(async (base64) => {
        let file_img = this.base64toFile(base64, this.avatarName);
        const url = await imgUpload(file_img);
        // TODO 上传头像url
        console.log(url)
        // this.$emit("avatarUrl", this.avatarUrl); //把头像url传出去
      });

      this.loading = false;
      this.$emit('closeAvatarCropper')
    },
    //base64转换为file类型
    base64toFile(base64, filename) {
      let arr = base64.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type: mime});
    },
  },
}
</script>

<style scoped>

</style>

<style lang="scss" scoped>
.AvatarUploader {
  .image {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 150px;

    .mask {
      opacity: 0;
      color: white;
      font-size: 25px;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &:hover {
        opacity: 1;
      }
    }
  }
}

.upload-preview {
  position: relative;
  top: 50%;
  transform: translate(50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 4px #bbbbbb;
  overflow: hidden;
}
</style>
