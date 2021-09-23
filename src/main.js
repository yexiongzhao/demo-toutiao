import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.less'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import zh from 'dayjs/locale/zh-cn'

import store from '@/store/index.js'

dayjs.extend(relativeTime)
dayjs.locale(zh)

Vue.filter('dateFormat', dt => {
  return dayjs().to(dt)
})

Vue.use(Lazyload)
Vue.use(Vant)

Vue.config.productionTip = false

Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
