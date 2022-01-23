<template>
  <v-snackbar
      class="mt-10"
      v-model="show"
      :color="color"
      elevation="6"
      top
      :timeout="timeout">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
          text
          v-bind="attrs"
          @click="show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  name: "Notify",
  data() {
    return {
      show: false,
      message: "",
      color: "",
      timeout: -1,
    };
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "notify/showMessage") {
        this.message = state.notify.content;
        this.color = state.notify.color;
        this.timeout = state.notify.timeout;
        this.show = true;
      }
    });
  }
};
</script>
