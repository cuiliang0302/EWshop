import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.scss'
import 'lib-flexible'
import Vant, {Lazyload} from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vant)
app.use(Lazyload)
app.mount('#app')
