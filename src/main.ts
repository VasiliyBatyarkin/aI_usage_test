import { createApp } from 'vue'

import { App, router } from './app'
import './shared/styles/main.sass'

const app = createApp(App)

app.use(router)

app.mount('#app')
