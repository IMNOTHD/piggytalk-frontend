<template>
  <v-app>
    <v-main>
      <div style="height: 100%; width: 100%">
        <router-view/>
        <Notify />
      </div>
    </v-main>
  </v-app>
</template>

<script>


import Notify from "@/components/Notify";
export default {
  name: 'App',
  components: {Notify},
  data: () => ({
    //
  }),
}
</script>

<style>
::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

/*remove recaptcha logo*/
.grecaptcha-badge {
  visibility: hidden;
}
</style>
