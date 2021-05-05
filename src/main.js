import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import authConfig from '../auth_config'
// import { setupAuth } from './auth'

// let app = createApp(App).use(router)

// function callbackRedirect(appState) {
//     router.push(
//       appState && appState.targetUrl
//         ? appState.targetUrl
//         : '/'
//     );
//   }
  
//   setupAuth(authConfig, callbackRedirect).then((auth) => {
//     app.use(auth).mount('#app')
//   })

createApp(App).use(store).use(router).mount('#app')