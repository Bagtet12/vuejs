import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')

// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
