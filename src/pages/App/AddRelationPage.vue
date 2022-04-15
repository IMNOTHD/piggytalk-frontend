<template>
  <v-dialog
      persistent
      v-model="v"
      scrollable
      @close="$emit('closeAddRelationPage')"
      width="800">
    <v-card>
      <v-card-title>
        <v-toolbar
            color="primary"
            dark>
          添加联系人
          <v-spacer></v-spacer>
          <v-btn
              @click="$emit('closeAddRelationPage')"
              icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text style="height: 600px">
        <v-form ref="searchForm" class="mt-4">
          <v-text-field
              v-model="searchId"
              outlined
              label="Uuid"
              :rules="[rules.required]"
              append-icon="mdi-magnify"
              @click:append="search"
              placeholder="输入您要搜索的联系人Uuid"/>
        </v-form>
        <v-divider class="mb-6"/>
        <div v-if="searchUser.uuid !== ''">
          <div class="d-flex align-center">
            <v-avatar
                color="primary"
                size="36">
              <img v-if="searchUser.avatar !== ''"
                   :src="searchUser.avatar"
                   alt="avatar">
              <span v-else class="white--text text-h5">{{ searchUser.nickname }}</span>
            </v-avatar>
            <span class="ml-4 text-h6">{{ searchUser.nickname }}</span>
            <a-tag color="green" class="ml-1">用户</a-tag>
            <v-spacer/>
            <v-text-field
                dense
                v-model="note"
                label="请求消息"
            ></v-text-field>
            <v-btn
                :loading="loading"
                @click="addPeople"
                color="primary">
              添&nbsp;&nbsp;加
            </v-btn>
          </div>
        </div>
        <div v-else class="d-flex justify-center mt-8">
          <h4>{{ msg }}</h4>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import account from "@/rpc/http/account/account";
import {ipcRenderer} from "electron"

export default {
  props: {
    visible: Boolean,
  },
  watch: {
    visible(val) {
      this.v = val;
    }
  },
  name: "AddRelationPage",
  data() {
    return {
      v: false,
      searchId: "",
      rules: {
        required: value => !!value || '必填项',
      },
      note: "",
      msg: "什么都没有发现哦",
      loading: false,
      searchUser: {
        uuid: "",
        avatar: "",
        nickname: "",
      }
    }
  },
  mounted() {
  },
  methods: {
    addPeople() {
      ipcRenderer.send("add-friend-request", {receiverUuid: this.searchId, note: this.note})
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.msg = "什么都没有发现哦"
        this.searchUser = {
          uuid: "",
          avatar: "",
          nickname: "",
        }
        this.searchId = ""
        this.note = ""
        this.$emit('closeAddRelationPage')
      }, 3000)
    },
    async search() {
      if (!this.$refs.searchForm.validate()) {
        return;
      }

      let result = await account.searchUuid({
        uuid: this.searchId,
      }).catch(reason => {
        console.log(reason)
        if (reason.response !== undefined) {
          this.$Vnotify.error(reason.response.data.message, 5000);
        } else {
          this.$Vnotify.error("服务错误", 5000);
        }
      });

      if (result.data.code !== 200) {
        this.$Vnotify.error(result.data.message);
      } else {
        if (result.data.data === null) {
          this.msg = "并没有这个人";
        } else {
          this.searchUser = {
            uuid: result.data.data.uuid,
            avatar: result.data.data.avatar,
            nickname: result.data.data.nickname,
          }
        }
      }
    },
  },
}
</script>

<style scoped>

</style>
