import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import "./assets/custom.css"
import {initializeApp} from 'firebase/app'



initializeApp(firebaseConfig);
createApp(App)
	.use(store)
	.use(router)
	.mount('#app')
