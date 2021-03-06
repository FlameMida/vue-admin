import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style/element_visiable.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 引入vue-admin前端初始化相关内容
import './core/vue-admin'
// 引入封装的router
import router from '@/router/index.js'
import run from '@/core/vue-admin.js'
import auth from '@/directive/auth'

import '@/permission'
import { store } from '@/store/index.js'

import App from './App.vue'
const app = createApp(App)
app.config.productionTip = false
app.use(run)
  .use(auth)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: zhCn }).mount('#app')

export default app
