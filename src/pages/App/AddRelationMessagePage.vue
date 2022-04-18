<template>
  <v-dialog
      persistent
      v-model="v"
      scrollable
      @close="$emit('closeAddRelationMessagePage')"
      width="800">
      <v-card>
        <v-card-title>
          <v-toolbar
              color="primary"
              dark>
            好友消息
            <v-spacer></v-spacer>
            <v-btn
                @click="$emit('closeAddRelationMessagePage')"
                icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card-title>
        <v-card-subtitle>
          <v-btn-toggle
              dense
              color="primary"
              v-model="contactType"
              mandatory
              tile
              class="mt-4"
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
        </v-card-subtitle>
        <v-card-text style="height: 600px" class="mt-n2">
          <div v-if="contactType === 'friend'">
            <a-list
                class="demo-loadmore-list"
                :loading="loading"
                item-layout="horizontal"
                :data-source="$store.state.relationMessage.friendRequest">
              <div
                  v-if="showLoadingMore"
                  slot="loadMore"
                  :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
                <a-spin v-if="loadingMore" />
                <v-btn color="primary" v-else @click="onLoadMore" :disabled="!loadToBottomFriend">
                  loading more
                </v-btn>
              </div>
              <a-list-item slot="renderItem" slot-scope="item">
                <a slot="actions">edit</a>
                <a slot="actions">more</a>
                <div class="d-flex align-center">
                  <v-avatar
                      color="primary"
                      size="36">
                    <img v-if="item.avatar !== ''"
                         :src="item.avatar"
                         alt="avatar">
                    <span v-else class="white--text text-h5">{{ item.nickname }}</span>
                  </v-avatar>
                  <span class="ml-4 text-h6">{{ item.nickname }}</span>
                </div>
              </a-list-item>
            </a-list>
          </div>
          <div v-else>
          </div>
        </v-card-text>
      </v-card>
  </v-dialog>
</template>

<script>
import {ipcRenderer} from "electron"
import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default {
  props: {
    visible: Boolean,
  },
  watch: {
    visible(val) {
      this.v = val;
      if (this.v === true) {
        this.$store.commit("relationMessage/cleanFriendRequest")
        ipcRenderer.send("list-friend-request-request", {startId: 0, count: 10})
      }
    }
  },
  name: "AddRelationMessagePage",
  data() {
    return {
      v: false,
      contactType: "friend",
      lockFriend: false,
      lockGroup: false,
      loadToBottomFriend: false,
      loadToBottomGroup: false,

      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    }
  },
  mounted() {
    this.getData(res => {
      this.loading = false;
      this.data = res.results;
    });

    this.lockFriend = true
    //ipcRenderer.send("list-friend-request-request", {startId: 0, count: 10})
    ipcRenderer.on("list-friend-request", ((event, args) => {
      this.lockFriend = false
      if (args.length < 10) {
        this.loadToBottomFriend = true
      }

      let getList = new Array(String);
      for (const message of args) {
        if (this.$store.state.commonUserInfo.userInfo[message.receiverUuid] === undefined) {
          getList.push(message.receiverUuid)
        }
        if (this.$store.state.commonUserInfo.userInfo[message.senderUuid] === undefined) {
          getList.push(message.senderUuid)
        }
      }
      ipcRenderer.send("userinfo-list-request", getList)
      this.$store.commit("relationMessage/addFriendRequest", args)
    }))
  },
  methods: {
    loadMore() {
      ipcRenderer.send("list-friend-request-request", {startId: this.$store.state.relationMessage.friendRequest[this.$store.state.relationMessage.friendRequest.length-1].eventId, count: 10})
    },
    getData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },
    onLoadMore() {
      this.loadingMore = true;
      this.getData(res => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
        });
      });
    },
  },
}
</script>

<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
