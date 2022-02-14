import './styles'

import Vue from 'vue'
import DeviceQueries from 'vue-device-queries'
import { toRem } from './helpers'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(DeviceQueries, {
  phone: `max-width: ${toRem(567)}`,
  tablet: `min-width: ${toRem(568)}`,
  mobile: `max-width: ${toRem(1024)}`,
  laptop: `min-width: ${toRem(1025)}`,
  desktop: `min-width: ${toRem(1360)}`
})

new Vue({
  render: h => h(App)
}).$mount('#app')
