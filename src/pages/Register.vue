<template>
  <div class="back">
    <v-card
        class="ma-auto pa-5 elevation-6"
        width="448">
      <v-card-text style="text-align: center">
        <div class="text-h4 text--primary font-weight-regular">
          注&nbsp;&nbsp;册
        </div>
        <div class="text--primary mt-3">
          创建您的&nbsp;PiggyTalk&nbsp;帐号
        </div>
      </v-card-text>
      <v-card-text class="mt-4">
        <v-form>
          <v-container>
            <v-row>
              <v-col class="pa-0">
                <v-text-field
                    v-model="accountData.username"
                    outlined
                    label="用户名"
                    dense
                    :rules="[rules.required, rules.username]"
                    hint="3-16位，仅数字和字母"
                    suffix="*"
                    placeholder="唯一登录凭证，不可修改"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-0 pl-0 pr-1">
                <v-text-field
                    v-model="accountData.password"
                    outlined
                    label="密码"
                    dense
                    :rules="[rules.required, rules.password]"
                    hint="6-30位，至少包含数字和字母"
                    suffix="*"
                    maxlength="30"
                    placeholder="输入您的密码"
                    type="password"/>
              </v-col>
              <v-col class="py-0 pl-1 pr-0">
                <v-text-field
                    v-model="accountData.confirmPassword"
                    outlined
                    label="确认"
                    dense
                    :rules="[rules.required, checkConfirmPassword]"
                    suffix="*"
                    maxlength="30"
                    placeholder="重复一次您的密码"
                    type="password"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-0 pl-0 pr-1"
                     md="7">
                <v-text-field
                    v-model="accountData.email"
                    outlined
                    label="邮箱"
                    :rules="[rules.email]"
                    dense
                    placeholder="输入您的邮箱"/>
              </v-col>
              <v-col class="py-0 pl-1 pr-0"
                     md="5">
                <v-text-field
                    v-model="accountData.phone"
                    outlined
                    label="手机"
                    :rules="[rules.phone]"
                    dense
                    placeholder="输入您的手机号"/>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions style="width: 100%">
        <v-row justify="space-between">
          <v-col md="6" style="text-align: left">
            <v-btn
                text
                color="primary"
                style="font-weight: 500; text-align: left"
                @click="$router.push('/login')">
              ←已有帐号？点击登录
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
                <div class="mx-3">注&nbsp;&nbsp;册</div>
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
  name: "Register",
  components: {
    VueRecaptcha
  },
  data() {
    return {
      accountData: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
      },
      rules: {
        required: value => !!value || '必填项',
        username: value => {
          const pattern = /^[a-zA-Z0-9_]{3,16}$/
          return pattern.test(value) || '无效的用户名'
        },
        password: value => {
          const pattern = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&()]{6,30}$/
          return pattern.test(value) || '无效的密码'
        },
        email: value => {
          if (value === undefined || value === "") return true;

          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '无效的邮箱'
        },
        phone: value => {
          if (value === undefined || value === "") return true;

          const pattern = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
          return pattern.test(value) || '无效的号码'
        },
      }
    }
  },
  methods: {
    checkConfirmPassword(confirmPassword) {
      return confirmPassword === this.accountData.password || "重复密码错误"
    },
    onCaptchaVerify(reCaptchaToken) {
      console.log(reCaptchaToken)
    },
    onCaptchaExpired() {
      this.$refs.reCaptcha.reset();
    }
  }
}
</script>

<style scoped>
.back {
  background-image: url("//i.impiggy.cn/images/2022/01/14/design.png");
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
}
</style>
