<template>
  <v-dialog
      v-model="v"
      persistent
      max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        修改头像
      </v-card-title>
      <v-divider/>
      <v-card-text style="height: 200px; width: 200px">
        <VueCropper
            v-if="showCropper"
            class="crop-box"
            ref="cropper"
            :img="options.img"
            :autoCrop="options.autoCrop"
            :fixedBox="options.fixedBox"
            :canMoveBox="options.canMoveBox"
            :autoCropWidth="options.autoCropWidth"
            :autoCropHeight="options.autoCropHeight"
            :centerBox="options.centerBox"
            :fixed="options.fixed"
            :fixedNumber="options.fixedNumber"
            :canMove="options.canMove"
            :canScale="options.canScale"
        ></VueCropper>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="error darken-1"
            text
            @click="$emit('closeAvatarCropper')">
          关闭
        </v-btn>
        <v-btn
            color="primary darken-1"
            text
            @click="$emit('closeAvatarCropper')">
          上传
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {VueCropper} from 'vue-cropper'

export default {
  props: {
    visible: Boolean,
  },
  components: {VueCropper},
  watch: {
    visible(val) {
      this.v = val;
    }
  },
  data() {
    return {
      v: this.visible,
      showCropper: true,
      options: {
        img: '', // 原图文件
        autoCrop: true, // 默认生成截图框
        fixedBox: false, // 固定截图框大小
        canMoveBox: true, // 截图框可以拖动
        autoCropWidth: 200, // 截图框宽度
        autoCropHeight: 200, // 截图框高度
        fixed: true, // 截图框宽高固定比例
        fixedNumber: [1, 1], // 截图框的宽高比例
        centerBox: true, // 截图框被限制在图片里面
        canMove: false, // 上传图片不允许拖动
        canScale: false // 上传图片不允许滚轮缩放
      }
    }
  },
  methods: {
    handleUploaded() {
      // update user avatar attribute
    },
  },
}
</script>

<style scoped>

</style>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  .reupload {
    color: #409eff;
    cursor: pointer;
  }
}
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 560px;
  height: 400px;
  background-color: #f0f2f5;
  margin-right: 10px;
  border-radius: 4px;
  .upload {
    text-align: center;
    margin-bottom: 24px;
  }
  .avatar-crop {
    width: 560px;
    height: 400px;
    position: relative;
    .crop-box {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
