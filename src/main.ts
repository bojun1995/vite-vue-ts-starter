import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// scss
import '@/style/base/globalStyle.scss'

// router
import router from '@/router/index'
app.use(router)

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

// vant
import vantInstaller from '@/install/vant'
app.use(vantInstaller)

app.mount('#app')
