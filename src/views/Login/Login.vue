<template>
  <div>
      <van-form @submit="login">
        <van-field v-model="form.mobile" type="tel" label="手机号码" placeholder="请输入手机号码" required :rules="rules.mobile"></van-field>
        <van-field v-model="form.code" type="password" label="登录密码" placeholder="请输入登录密码" required :rules="rules.code"></van-field>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
  </div>
</template>

<script>
import store from '@/store/index.js'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        mobile: '',
        code: ''
      },
      // 表单的校验规则对象
      rules: {
        // 手机号的校验规则
        mobile: [
          { required: true, message: '请填写您的手机号', trigger: 'onBlur' },
          // 11 位手机号的校验规则
          { patten: /^1\d{10}$/, message: '请填写正确的手机号', trigger: 'onBlur' }
        ],
        // 密码的校验规则
        code: [{ required: true, message: '请填写您的密码', trigger: 'onBlur' }]
      }
    }
  },
  methods: {
    login() {
      setTimeout(() => {
        store.commit('updateTokenInfo', {
          mobile: this.mobile,
          code: this.code
        })
        this.$router.push('/')
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped></style>
