<template>
	<header class="py-3 mb-3 border-bottom fixed-top header bg-primary" >
		<div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
			<a class="navbar-brand fw-bold fs-1 text-light lh-1 ad px-3" href="/">O O X X</a>
			<div class="d-flex flex-row-reverse">
				<div class="flex-shrink-0 dropdown btn-group">
					<a href="#" class="d-block link-dark text-decoration-none dropdown-toggle text-light fs-2" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
						<i class="bi bi-list"></i>
					</a>
					<ul class="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser2">
						<a @click="newGame" class="dropdown-item btn_new_game" href="#">新遊戲</a>
						<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_how">遊戲說明</a>
						<hr class="dropdown-divider">
						<a v-show="isLogin" class="dropdown-item" href="#">{{userName}}</a>
						<a v-show="isLogin?false:true" @click="whatstore" class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_log_in" ref="btn_login">登入</a>
						<a v-show="isLogin" class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_sign_out" >登出</a>
						<div class="form-check form-switch ms-3">
							<input :checked="theme" @click="toggleTheme" class="form-check-input" type="checkbox" role="switch">
							<label class="form-check-label">
								<i v-show="theme" class="bi bi-moon-fill"></i>
								<i v-show="theme==false" class="bi bi-sun-fill"></i>
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

export default {
	name: 'Header',
	props: {
		msg: String
	},
	methods: {
		isUser() {
			let auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				if (user) {
					console.log(user);
					let username = user.email.split('@')[0];
					this.$store.commit('changeName', username);
					this.$store.commit('login_signout', true);
					// User is signed in

				} else {
					// User is signed out
					this.$store.commit('changeName', "");
					this.$store.commit('login_signout', false);
				}
			});
		},
		newGame(){
			let db = getDatabase();
			let url = window.location.href;
			let game_id           = '';
			let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			let charactersLength = characters.length;
			for ( let i = 0; i < 6; i++ ) {
				game_id += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
			let game_url = url.substring(0, url.lastIndexOf('/')) + '/play.html?game=' + game_id;
			set(ref(db, 'games/' + game_id), {
				p1 : this.$store.state.username,
				p2 : "",
				now : 0,
				next : 9,
				last : 81,
				sets : ",,,,,,,,",
				moves : ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
			}).then(()=>{
				console.log(game_url);
			});
		},
		toggleTheme(){
			this.$store.commit('changeTheme', this.theme ? 'light' : 'dark');
		}
	},
	computed: {
		isLogin(){
			return this.$store.state.islogin;
		},
		userName(){
			return this.$store.state.username;
		},
		theme(){
			if(this.$store.state.theme == 'dark'){
				return true;
			} else {
				return false;
			}
		}
	},
	created(){
		this.isUser();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
