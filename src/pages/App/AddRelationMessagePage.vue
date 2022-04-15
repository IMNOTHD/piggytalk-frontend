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
        <v-card-text style="height: 600px">
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
          <div v-if="contactType === 'friend'">
          </div>
          <div v-else>
          </div>
        </v-card-text>
      </v-card>
  </v-dialog>
</template>

<script>
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
  name: "AddRelationMessagePage",
  data() {
    return {
      v: false,
      contactType: "friend",
      lockFriend: false,
      lockGroup: false,
      loadToBottomFriend: false,
      loadToBottomGroup: false,
    }
  },
  mounted() {
    this.lockFriend = true
    ipcRenderer.send("list-friend-request-request", {startId: 0, count: 10})
    ipcRenderer.on("list-friend-request", ((event, args) => {
      this.lockFriend = false
      if (args.length < 10) {
        this.loadToBottomFriend = true
      }
      this.$store.commit("relationMessage/addFriendRequest", args)
    }))
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
