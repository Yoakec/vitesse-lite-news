import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { setupRouter } from './router'

const app = createApp(App)

setupRouter(app);

app.mount('#app')
