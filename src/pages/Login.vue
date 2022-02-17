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
        <v-form ref="loginForm">
          <v-text-field
              v-model="accountData.account"
              outlined
              label="帐号"
              :rules="[rules.required]"
              placeholder="输入您的用户名/手机号/邮箱"/>
          <v-text-field
              v-model="accountData.password"
              class="mt-n1"
              outlined
              label="密码"
              :rules="[rules.required]"
              placeholder="输入您的密码"
              type="password"/>
        </v-form>
        <v-btn
            text
            color="primary"
            style="font-weight: 500; text-align: left"
            class="pa-0 mt-n4">
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
                @expired="$refs.reCaptcha.reset()">
              <v-btn
                  color="primary"
                  :loading="loginBtnLoader"
                  :disabled="loginBtnLoader">
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
import account from "@/rpc/http/account/account";
import md5 from "md5";

export default {
  name: "Login",
  components: {
    VueRecaptcha
  },
  data: () => ({
    loginBtnLoader: false,
    accountData: {
      account: "",
      password: "",
    },
    rules: {
      required: value => !!value || '必填项',
    },
  }),
  methods: {
    async onCaptchaVerify(reCaptchaToken) {
      if (!this.$refs.loginForm.validate()) {
        return;
      }

      let exit = false;

      this.loginBtnLoader = true;
      let result = await account.login({
        account: this.accountData.account,
        password: md5(this.accountData.password + "piggytalk"),
        reCaptchaToken: reCaptchaToken,
      }).catch(reason => {
        exit = true;
        console.log(reason)
        if (reason.response !== undefined) {
          this.$Vnotify.error(reason.response.data.message, 5000);
        } else {
          this.$Vnotify.error("服务错误", 5000);
        }
      });
      this.loginBtnLoader = false;
      if (exit) {
        return;
      }

      if (result.data.code !== 200) {
        this.$Vnotify.error(result.data.message);
      } else {
        this.$cookies.set("token", result.data.data.token, new Date().setFullYear(new Date().getFullYear() + 1));
        this.$store.commit("userInfo/setUserInfo", {
          username: result.data.data.username,
          email: result.data.data.email,
          phone: result.data.data.phone,
          nickname: result.data.data.nickname,
          avatar: result.data.data.avatar,
        });
        await this.$router.push('/app');
      }
    },
  },
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
