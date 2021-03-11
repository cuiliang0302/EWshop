<template>
  <Navbar title="用户登录"></Navbar>
  <div class="main">
    <van-image
        round
        width="3rem"
        height="3rem"
        :src="require('@/assets/images/logo.png')"
    />
    <van-form @submit="onSubmit">
      <van-field
          v-model="state.email"
          name="邮箱号"
          label="邮箱号"
          placeholder="邮箱号"
          :rules="[{ required: true, message: '请填写邮箱号' }]"
      />
      <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <p class="login-link" @click="$router.push('/register')">没有账号？立即注册</p>
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
  <Tabbar></Tabbar>
</template>

<script>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex"
import {Toast} from "vant";
import {login} from "@/api/profile";
import Navbar from "@/components/common/Navbar";
import Tabbar from "@/components/common/Tabbar";

export default {
  name: "Login",
  setup() {
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      password: '',
      email: ''
    });
    const onSubmit = (values) => {
      login(state).then((response) => {
        console.log(response)
        Toast.success('登录成功')
        window.sessionStorage.setItem('token', response.access_token)
        store.commit('setIsLogin',true)
        setTimeout(() => {
          router.go(-1)
        }, 1000)
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
        Toast.fail('登录失败');
      })
    }
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
