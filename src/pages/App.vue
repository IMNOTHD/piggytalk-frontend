<template>
  <el-container style="height: 100%">
    <el-aside style="width:fit-content">
      <div class="d-flex flex-row"
           style="height: 100%">
        <div v-if="openContact">
          <v-navigation-drawer
              class="no-border-drawer"
              permanent>
            <v-overlay
                :color="$vuetify.theme.dark ? 'white' : '#212121'"
                :opacity="$vuetify.theme.dark ? 0.24 : 0.12">

            </v-overlay>
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
                    color="success"
                    block
                    @click.stop="miniMessage = !miniMessage">
                  <h1 v-if="miniMessage">&gt;</h1>
                  <h1 v-else>&lt;</h1>
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
            <v-avatar
                color="primary"
                size="36">
              <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John">
            </v-avatar>
            <v-btn
                text
                @click="other = !other">
              <v-icon dark>
                mdi-format-list-bulleted
              </v-icon>
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
  </el-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    other: false,
    messageBoxInnerHeight: 300,
    benched: 3,
    drawer: true,
    openContact: false,
    miniMessage: true,
    items: [
      {title: 'Home', icon: 'mdi-home-city'},
      {title: 'My Account', icon: 'mdi-account'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
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
  },
}
</script>

<style scoped>
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

</style>
