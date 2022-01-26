<template>
  <el-container style="height: 100%">
    <el-aside style="width:fit-content">
      <div class="d-flex flex-row"
           style="height: 100%">
        <div v-if="openContact">
          <v-navigation-drawer
              permanent
              color="primary darken-3">
            <v-overlay
                color="white"
                opacity="0.24">

            </v-overlay>
          </v-navigation-drawer>
        </div>
        <div>
          <v-navigation-drawer
              permanent
              v-model="drawer"
              :mini-variant="miniMessage"
              color="primary darken-3 inherit">
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
                <v-btn block @click.stop="miniMessage = !miniMessage">
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
      <el-header style="background: #004d9f">Header</el-header>
      <el-main style="background: #004d9f">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
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
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
    ],
  }),
  mounted() {
    this.messageBoxInnerHeight = window.innerHeight - 72 - 1 - 52 - 16;
    window.onresize = () => {
      this.messageBoxInnerHeight = window.innerHeight - 72 - 1 - 52 - 16;
    }
  },
}
</script>

<style scoped>

</style>
