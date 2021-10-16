import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import {firebase, initializeApp} from 'firebase/app'

const firebaseConfig = {
	apiKey: "AIzaSyDKRApkcL9qs2w9lw_CsAnh-QeAByrgf9Q",
	authDomain: "uttt-4a96a.firebaseapp.com",
	databaseURL: "https://uttt-4a96a-default-rtdb.firebaseio.com",
	projectId: "uttt-4a96a",
	storageBucket: "uttt-4a96a.appspot.com",
	messagingSenderId: "121984318562",
	appId: "1:121984318562:web:2cb416d0b393fa9a75e53b",
	measurementId: "G-6W6BMW36EB"
};

initializeApp(firebaseConfig);
createApp(App)
	.use(store)
	.use(router)
	.mount('#app')
