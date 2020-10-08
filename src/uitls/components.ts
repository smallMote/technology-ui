// 注册组件
import { App } from 'vue'
import TButton from '@/components/TButton.vue'

export default {
  install: (app: App) => {
    app.component('TButton', TButton)
  }
}
