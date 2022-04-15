<template>
  <el-container style="height: 100%">
    <el-aside style="width:fit-content">
      <div class="d-flex flex-row"
           style="height: 100%">
        <div v-if="openContact">
          <!--联系人-->
          <v-navigation-drawer
              class="no-border-drawer"
              permanent>
            <v-overlay
                :z-index="-1"
                class="z-bottom"
                :color="$vuetify.theme.dark ? 'white' : '#212121'"
                :opacity="$vuetify.theme.dark ? 0.24 : 0.12">
            </v-overlay>
            <div class="d-flex">
              <v-btn-toggle
                  dense
                  color="primary"
                  v-model="contactType"
                  mandatory
                  tile
                  group>
                <v-btn
                    value="friend"
                    style="z-index: 100"
                    class="ma-1"
                    text>
                  好友
                </v-btn>
                <v-btn
                    value="group"
                    class="ma-1"
                    text>
                  群聊
                </v-btn>
              </v-btn-toggle>
              <v-btn
                  @click="addRelationMessagePageVisible = true"
                  class="ma-1"
                  plain>
                <v-icon>mdi-message-arrow-right-outline</v-icon>
              </v-btn>
              <v-btn
                  @click="addRelationPageVisible = true"
                  class="ma-1"
                  plain>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            <v-list nav de>
              <v-list-item-group>
                <div v-if="contactType === 'friend'">
                  <v-list-item
                      v-for="uuid in friendList"
                      :key="uuid">
                    <v-list-item-avatar size="24">
                      <v-img
                          :src="$store.state.commonUserInfo.userInfo[uuid].avatar"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                          v-text="$store.state.commonUserInfo.userInfo[uuid].nickname"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <div v-else>
                  <v-list-item
                      v-for="chat in groupList"
                      :key="chat.uuid">
                    <v-list-item-avatar size="24">
                      <v-img
                          :src="chat.avatar"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-text="chat.nickname"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </div>

        <div>
          <v-navigation-drawer
              permanent
              class="no-border-drawer"
              v-model="drawer"
              :mini-variant.sync="miniMessage">
            <v-list nav>
              <v-list-item
                  active-class="ml-n3 pl-5"
                  @click.stop="openContact = !openContact"
                  :input-value="openContact">
                <v-list-item-icon>
                  <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>联系人</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav>
              <v-virtual-scroll
                  :items="items"
                  :height="messageBoxInnerHeight"
                  item-height="64">
                <template v-slot:default="{ item }">
                  <v-list-item
                      :key="item.title"
                      link>
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-virtual-scroll>
            </v-list>

            <template v-slot:append>
              <div class="pa-2">
                <v-btn
                    color="primary"
                    block
                    @click.stop="miniMessage = !miniMessage">
                  <h1 v-if="miniMessage" style="color:#fff;">&gt;</h1>
                  <h1 v-else style="color:#fff;">&lt;</h1>
                </v-btn>
              </div>
            </template>
          </v-navigation-drawer>
        </div>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <v-app-bar
            height="73"
            clipped-right
            flat>
          <v-spacer></v-spacer>
          <v-responsive max-width="156" content-class="d-flex flex-row justify-end">

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar
                    color="primary"
                    size="36"
                    v-bind="attrs"
                    v-on="on">
                  <img v-if="$store.state.userInfo.avatar !== ''"
                      :src="$store.state.userInfo.avatar"
                      alt="avatar">
                  <span v-else class="white--text text-h5">{{$store.state.userInfo.nickname}}</span>
                </v-avatar>
              </template>
              <v-list class="change-list-avatar-margin">
                <v-list-item
                    @click="avatarCropperVisible = true"
                    link>
                  <v-list-item-icon>
                    <v-icon>mdi-account-convert</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>修改头像</v-list-item-title>
                </v-list-item>
                <v-list-item
                    link>
                  <v-list-item-icon>
                    <v-icon>mdi-logout-variant</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>登出</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn
                text
                @click="other = !other">
              <v-icon dark>mdi-format-list-bulleted</v-icon>
            </v-btn>
          </v-responsive>
        </v-app-bar>

      </el-header>
      <el-main>
      </el-main>
      <el-footer>
        <v-text-field
            dense
            flat
            hide-details
            rounded
            solo
            solo-inverted
            prepend-icon="mdi-emoticon"
            append-outer-icon="mdi-send"
        ></v-text-field>
      </el-footer>
    </el-container>

    <!--侧边栏-->
    <v-navigation-drawer
        v-model="other"
        absolute
        right
        temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <AddRelationMessagePage
        :visible="addRelationMessagePageVisible"
        @closeAddRelationMessagePage="addRelationMessagePageVisible = false"/>
    <AddRelationPage
        :visible="addRelationPageVisible"
        @closeAddRelationPage="addRelationPageVisible = false"/>
    <AvatarCropper
        :url="$store.state.userInfo.avatar"
        :visible="avatarCropperVisible"
        @closeAvatarCropper="avatarCropperVisible = false"/>
  </el-container>
</template>

<script>
import {ipcRenderer} from "electron";
import AvatarCropper from "@/components/AvatarCropper";
import AddRelationPage from "@/pages/App/AddRelationPage";
import AddRelationMessagePage from "@/pages/App/AddRelationMessagePage";

export default {
  name: "App",
  components: {AddRelationMessagePage, AddRelationPage, AvatarCropper},
  data: () => ({
    avatarCropperVisible: false,
    addRelationPageVisible: false,
    addRelationMessagePageVisible: false,
    other: false,
    messageBoxInnerHeight: 300,
    benched: 3,
    drawer: true,
    openContact: true,
    miniMessage: true,
    contactType: "friend",
    friendList: [],
    groupList: [
      {
        nickname: "123",
        uuid: "",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        nickname: "123",
        uuid: "",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        nickname: "123",
        uuid: "",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
      }
    ],
    items: [
      {title: 'Home', icon: 'mdi-home-city'},
      {title: 'My Account', icon: 'mdi-account'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
    ],
    eventCall: null
  }),
  created() {
  },
  mounted() {
    this.messageBoxInnerHeight = window.innerHeight - 72 - 1 - 52 - 16;
    window.onresize = () => {
      this.messageBoxInnerHeight = window.innerHeight - 72 - 1 - 52 - 16;
    }

    ipcRenderer.send("online", this.$cookies.get("token"))
    ipcRenderer.on("token-unauthenticated", () => {
    })
    ipcRenderer.on("client-error", ((event, args) => {
      this.$Vnotify.error(args, 5000);
    }))

    ipcRenderer.on("online-success", () => {
      // 登录成功, 完成相应数据拉取
      ipcRenderer.send("list-friend-request")
    })

    ipcRenderer.on("friend-list", ((event, args) => {
      console.log(`friend-list: ${args}`)
      this.friendList = args
      // 拉一遍userInfo
      ipcRenderer.send("userinfo-list-request", args)
    }))
    ipcRenderer.on("userinfo-list", ((event, args) => {
      this.$store.commit("commonUserInfo/setUserInfo", args)
    }))
  },
}
</script>

<style scoped>
>>> .change-list-avatar-margin .v-list-item__icon:first-child {
  margin-right: 12px !important;
}

>>> .no-border-drawer .v-navigation-drawer__border {
  width: 0 !important;
}

>>> .el-header {
  padding: 0 !important;
  height: 73px !important;
}

>>> .el-main {
  padding: 0 !important;
}

> > .z-bottom {
  z-index: -1 !important;
}

</style>
