<template>
  <Navbar title="用户注册"></Navbar>
  <div class="main">
    <van-image
        round
        width="3rem"
        height="3rem"
        :src="require('@/assets/images/logo.png')"
    />
    <van-form @submit="onSubmit">
      <van-field
          v-model="state.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="state.password_confirmation"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请填写确认密码' }]"
      />
      <van-field
          v-model="state.email"
          name="电子邮箱"
          label="电子邮箱"
          placeholder="电子邮箱"
          :rules="[{ required: true, message: '请填写电子邮箱' }]"
      />
      <div style="margin: 16px;">
        <p class="login-link" @click="$router.push('/login')">已有账号？立即登录</p>
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
  <Tabbar></Tabbar>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Tabbar from "@/components/common/Tabbar";
import {reactive} from "vue";
import {Toast} from 'vant';
import {register} from "@/api/profile"
import {useRouter} from 'vue-router'

export default {
  name: "Register",
  setup() {
    const router = useRouter()
    const state = reactive({
      name: '',
      password: '',
      password_confirmation: '',
      email: ''
    });
    const onSubmit = (values) => {
      if (state.password !== state.password_confirmation) {
        Toast('密码不一致');
      } else {
        register(state).then((response) => {
          console.log(response)
          Toast.success('注册成功')
          setTimeout(() => {
            router.push({path: '/login'})
          }, 1500)
        }).catch(error => {
          //发生错误时执行的代码
          console.log(error)
          Toast.fail('注册失败');
        })
      }
    };
    return {
      state,
      onSubmit,
    };
  },
  components: {
    Navbar,
    Tabbar,
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-link {
  text-align: center;
  color: skyblue;
  font-size: 14px;
}

.van-image {
  margin-top: 50px;
  margin-bottom: 50px;
}

.van-form {
  width: 90%;
}
</style>
