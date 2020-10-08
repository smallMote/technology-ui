import { createApp } from 'vue'
import App from './App.vue'
import InstallComponents from './uitls/components'
import './style/index.less'

const app = createApp(App)
app.use(InstallComponents)
app.mount('#app')
