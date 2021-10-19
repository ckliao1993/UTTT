<template>
	<header class="py-3 mb-3 border-bottom fixed-top header header" >
		<div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
			<a class="navbar-brand fw-bold fs-1 text-light lh-1 ad px-3" href="/">O O X X</a>
			<div class="d-flex flex-row-reverse">
				<div class="flex-shrink-0 dropdown btn-group">
					<a href="#" class="d-block link-dark text-decoration-none dropdown-toggle text-light fs-2" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
						<i class="bi bi-list"></i>
					</a>
					<ul class="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser2">
						<a @click="newGame" id="btn_new_game" class="dropdown-item" href="javascript:;">新遊戲</a>
						<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_how">遊戲說明</a>
						<hr class="dropdown-divider">
						<li v-show="isLogin" class="dropdown-item title">{{userName}}</li>
						<a v-show="isLogin?false:true" @click="whatstore" class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_log_in" ref="btn_login">登入</a>
						<a v-show="isLogin" class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_sign_out" >登出</a>
						<div class="form-check form-switch ms-3">
							<input :checked="userTheme" @change="toggleTheme" class="form-check-input" type="checkbox" role="switch">
							<label class="form-check-label">
								<i v-show="userTheme" class="bi bi-moon-fill"></i>
								<i v-show="!userTheme" class="bi bi-sun-fill"></i>
							</label>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Modal } from 'bootstrap';
import { Toast } from 'bootstrap';
let t_this;
export default {
	name: 'Header',
	props: {
		msg: String,
	},
	methods: {
		isUser() {
			let auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				if (user) {
					this.$store.commit('changeMsg', '歡迎回來 '+user.email.split('@')[0]);
					t_this.show();
					this.$store.commit('changeEmail', user.email);
					this.$store.commit('login_signout', true);
					// User is signed in

				} else {
					// User is signed out
					this.$store.commit('changeEmail', "");
					this.$store.commit('login_signout', false);
				}
			});
		},
		newGame(){
			if(this.isLogin == false){
				let m_start = new Modal(document.getElementById('m_start'));
				m_start.show();
				return;
			}
			let db = getDatabase();
			let game_id           = '';
			let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			let charactersLength = characters.length;
			for ( let i = 0; i < 6; i++ ) {
				game_id += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
			let game_url = window.location.origin + '/ooxx/play/' + game_id;
			set(ref(db, 'games/' + game_id), {
				p1 : this.$store.state.email,
				p2 : "",
				now : 0,
				next : 9,
				last : 81,
				sets : ",,,,,,,,",
				moves : ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
				over: "",
			}).then(()=>{
				console.log(game_url);
				window.open(game_url, '_blank').focus();
			});
		},
		toggleTheme(){
			let theme = this.userTheme ? false : true;
			this.setTheme(theme);
			localStorage.setItem('theme', theme);
			this.$store.commit('changeTheme', theme);
		},
		setTheme(theme){
			let cla = theme ? 'dark' : 'light';
			document.documentElement.className = cla;
		},
		getPreference() {
			if(localStorage.getItem("theme")){
				return (localStorage.getItem("theme") == 'true') ? true : false;
			}
			const hasDarkPreference = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			if (hasDarkPreference) {
				return true;
			} else {
				return false;
			}
		},
	},
	computed: {
		isLogin(){
			return this.$store.state.islogin;
		},
		userName(){
			return this.$store.state.email.split('@')[0];
		},
		userTheme(){
			return this.$store.state.theme;
		}
	},
	created(){
		this.isUser();
	},
	mounted(){
		const initUserTheme = this.getPreference();
		this.$store.commit('changeTheme', initUserTheme);
		this.setTheme(initUserTheme);
		t_this = new Toast(document.getElementById('toast_0'));
	},
}
</script>

<style lang="scss">
.title {color: var(--color-primary);}
</style>
