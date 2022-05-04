<template>
  <div style="height: 100%; display: flex">
    <div style="height: 200px; width: 400px; margin: auto">
      <v-img src="https://i.impiggy.cn/images/2022/05/04/piggytalk77d713ae5a9c416b.png"></v-img>


      <div class="d-flex flex-row mt-16">

        <v-btn class="ml-2" outlined color="primary" large @click="$router.push('/login')">登&nbsp;&nbsp;录</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="mr-2" outlined color="primary" large @click="$router.push('/login')">注&nbsp;&nbsp;册</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import imgUpload from "@/rpc/grpc/upload/v1/upload_client";

export default {
  name: "Main",
  data: () => ({
    file: null,
  }),
  mounted() {
  },
  methods: {
    async onUpload() {
      console.log(123)
      const url = await imgUpload(this.file)
      console.log(url)
    },
  },
}
</script>

<style scoped>

</style>


