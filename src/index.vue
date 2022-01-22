<template>
  <v-app>
    <v-main>
      <div style="height: 100%; width: 100%">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

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
