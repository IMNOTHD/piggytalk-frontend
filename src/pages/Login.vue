<template>
  <div class="back">
    <v-card
        class="ma-auto pa-5 elevation-6"
        width="448">
      <v-card-text style="text-align: center">
        <div class="text-h4 text--primary font-weight-regular">
          登&nbsp;&nbsp;录
        </div>
        <div class="text--primary mt-3">
          使用您的&nbsp;PiggyTalk&nbsp;帐号
        </div>
      </v-card-text>
      <v-card-text class="mt-4">
        <v-form>
          <v-text-field
              outlined
              label="帐号"
              placeholder="输入您的用户名/手机号/邮箱"/>
          <v-text-field
              class="mt-n1"
              outlined
              hide-details
              label="密码"
              placeholder="输入您的密码"
              type="password"/>
        </v-form>
        <v-btn
            text
            color="primary"
            style="font-weight: 500; text-align: left"
            class="pa-0 mt-1">
          忘记了密码？
        </v-btn>
      </v-card-text>
      <v-card-actions style="width: 100%">
        <v-row justify="space-between">
          <v-col md="6" style="text-align: left">
            <v-btn
                text
                color="primary"
                style="font-weight: 500; text-align: left"
                @click="$router.push('/register')">
              ←没有帐号？点击注册
            </v-btn>
          </v-col>
          <v-col md="6" style="text-align: right" class="pr-5">
            <vue-recaptcha
                ref="reCaptcha"
                sitekey="6LfCMxQeAAAAANRKRJah13Go_irRkTDeDQbtyk1_"
                size="invisible"
                @verify="onCaptchaVerify"
                @expired="onCaptchaExpired">
              <v-btn color="primary">
                <div class="mx-3">登&nbsp;&nbsp;录</div>
              </v-btn>
            </vue-recaptcha>
          </v-col>
        </v-row>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {VueRecaptcha} from 'vue-recaptcha';

export default {
  name: "Login",
  components: {
    VueRecaptcha
  },
  data: () => ({
    onCaptchaVerify: (reCaptchaToken) => {
      console.log(reCaptchaToken)
    },
    onCaptchaExpired: () => {
      this.$refs.reCaptcha.reset();
    }}),
  methods: {},
}
</script>

<style scoped>
.back {
  background-image: url("//i.impiggy.cn/images/2022/01/14/material.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
}
</style>
