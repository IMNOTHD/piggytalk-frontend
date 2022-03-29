<template>
  <div>
    <v-btn @click="$router.push('/login')"></v-btn>

    <v-file-input
        @change="onUpload"
        v-model="file"
        accept="image/*">
    </v-file-input>
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


