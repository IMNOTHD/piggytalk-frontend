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
                  <div v-if="refreshCommonUserinfo">
                    <v-list-item
                        @click="openFriendContactWindow(uuid)"
                        v-for="uuid in friendList"
                        :key="uuid">
                      <v-list-item-avatar size="24">
                        <v-img v-if="$store.state.commonUserInfo.userInfo[uuid] !== undefined"
                               :src="$store.state.commonUserInfo.userInfo[uuid].avatar"></v-img>
                        <v-img v-else :src="''"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-if="$store.state.commonUserInfo.userInfo[uuid] !== undefined"
                                           v-text="$store.state.commonUserInfo.userInfo[uuid].nickname"></v-list-item-title>
                        <v-list-item-title v-else v-text="''"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
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

                  <v-badge :content="5">
                    <v-icon>mdi-account-multiple</v-icon>
                  </v-badge>
                </v-list-item-icon>
                <v-list-item-title>联系人</v-list-item-title>

              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav>
              <v-list-item-group
                  v-model="selectedTalk">
                <v-virtual-scroll
                    :items="talkList"
                    :height="messageBoxInnerHeight"
                    item-height="64">
                  <template v-slot:default="{ item }">
                    <v-list-item
                        @click="jumpToTalk(item.talkUuid)"
                        :key="item.talkUuid"
                        link>
                      <v-list-item-avatar>
                        <v-badge
                            :content="item.unAck"
                            :value="item.unAck"
                            overlap>

                          <v-avatar size="24">
                            <v-img v-if="$store.state.commonUserInfo.userInfo[item.talkUuid] !== undefined"
                                   :src="$store.state.commonUserInfo.userInfo[item.talkUuid].avatar"></v-img>
                            <v-img v-else :src="''"></v-img>
                          </v-avatar>
                        </v-badge>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-if="$store.state.commonUserInfo.userInfo[item.talkUuid] !== undefined"
                                           v-text="$store.state.commonUserInfo.userInfo[item.talkUuid].nickname"></v-list-item-title>
                        <v-list-item-title v-else v-text="''"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-virtual-scroll>
              </v-list-item-group>
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
          <div v-if="selectedTalk !== undefined && selectedTalk !== null">
            <v-btn
                @click="closeCurrentTalk"
                icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <span class="ml-4 text-h6"
                v-if="$store.state.commonUserInfo.userInfo[talkList[selectedTalk].talkUuid] !== undefined">
              {{ $store.state.commonUserInfo.userInfo[talkList[selectedTalk].talkUuid].nickname }}
            </span>
          </div>
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
                  <span v-else class="white--text text-h5">{{ $store.state.userInfo.nickname }}</span>
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
        <router-view></router-view>
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
    refreshCommonUserinfo: true,
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
    selectedTalk: null,
    talkList: [],
    eventCall: null,
  }),
  created() {
  },
  mounted() {
    this.messageBoxInnerHeight = window.innerHeight - 72 - 1 - 52 - 16;
    window.onresize = () => {
      this.messageBoxInnerHeight = window.innerHeight - 72 - 1 - 52 - 16;
    }

    this.online()
    ipcRenderer.on("token-unauthenticated", () => {
    })
    ipcRenderer.on("client-error", ((event, args) => {
      this.$Vnotify.error(args, 5000);
    }))

    ipcRenderer.on("online-success", () => {
      // 登录成功, 完成相应数据拉取
      console.log("online-success")
      ipcRenderer.send("list-friend-request")
      ipcRenderer.send("list-talk-ack-request")
    })

    ipcRenderer.on("friend-list", ((event, args) => {
      console.log(`friend-list: ${args}`)
      this.friendList = args
      // 拉一遍userInfo
      this.loadCommonUserinfo(args);
    }))
    ipcRenderer.on("userinfo-list", ((event, args) => {
      this.refreshCommonUserinfo = false
      this.$store.commit("commonUserInfo/setUserInfo", args)
      this.refreshCommonUserinfo = true
    }))
    ipcRenderer.on("end", () => {
      setTimeout(() => {
        this.online()
      }, 1000)
    })
    ipcRenderer.on("list-talk-ack", ((event, args) => {
      this.listAckCount(args)
    }))
  },
  methods: {
    jumpToTalk(talkUuid) {
      this.$router.push(`/app/${talkUuid}`).catch(err => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
            err.name !== 'NavigationDuplicated' &&
            !err.message.includes('Avoided redundant navigation to current location')
        ) {
          // But print any other errors to the console
          console.log(err);
        }
      })
    },
    closeCurrentTalk() {
      this.selectedTalk = null
      this.$router.push('/app')
    },
    listAckCount(list) {
      const uuidList = []
      for (let i = 0; i < list.length; i++) {
        this.talkList.push(list[i])
        uuidList.push(list[i].talkUuid)
      }
      this.loadCommonUserinfo(uuidList)
    },
    online() {
      console.log(`${this.nowDate()} online`)
      ipcRenderer.send("online", {
        token: this.$cookies.get("token"),
        uuid: this.$store.state.userInfo.uuid,
      })
    },
    openFriendContactWindow(uuid) {
      this.openContact = false
      console.log(uuid)
      for (let i = 0; i < this.talkList.length; i++) {
        //console.log(`${this.talkList[i].talkUuid}: ${this.talkList[i].talkUuid === uuid}`)
        if (this.talkList[i].talkUuid === uuid) {
          this.selectedTalk = uuid
          this.$router.push(`/app/${uuid}`).catch(err => {
            // Ignore the vuex err regarding  navigating to the page they are already on.
            if (
                err.name !== 'NavigationDuplicated' &&
                !err.message.includes('Avoided redundant navigation to current location')
            ) {
              // But print any other errors to the console
              console.log(err);
            }
          })
          this.selectedTalk = i
          return
        }
      }
      this.talkList.unshift({
        talkUuid: uuid,
        unAck: 0,
      })
      this.selectedTalk = 0
      this.$router.push(`/app/${uuid}`).catch(err => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
            err.name !== 'NavigationDuplicated' &&
            !err.message.includes('Avoided redundant navigation to current location')
        ) {
          // But print any other errors to the console
          console.log(err);
        }
      })
      console.log(this.talkList)
    },
    loadCommonUserinfo(getList) {
      //console.log(getList)
      ipcRenderer.send("userinfo-list-request", getList)
    },
    nowDate() {
      const date = new Date();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();

      if (month <= 9) {
        month = "0" + month;
      }

      if (strDate <= 9) {
        strDate = "0" + strDate;
      }

      return date.getFullYear() + "-" + month + "-" + strDate + " "
          + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    }

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
