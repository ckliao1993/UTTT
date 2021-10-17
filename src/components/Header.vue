<template>
	<header class="py-3 mb-3 border-bottom fixed-top header bg-primary">
		<div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
			<a class="navbar-brand fw-bold fs-1 text-light lh-1 ad px-3" href="/">O O X X</a>
			<div class="d-flex flex-row-reverse">
				<div id="d_big" class="flex-shrink-0 dropdown btn-group">
					<a href="#" class="d-block link-dark text-decoration-none dropdown-toggle text-light fs-2" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
						<i class="bi bi-list"></i>
					</a>
					<ul id="d_one" class="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser2">
						<a class="dropdown-item btn_new_game" href="#">新遊戲</a>
						<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_how">遊戲說明</a>
						<hr class="dropdown-divider">
						<a v-show="isLogin" class="dropdown-item" href="#">{{userName}}</a>
						<a v-show="isLogin?false:true" @click="whatstore" class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_log_in" id="btn_to_login" ref="btn_login">登入</a>
						<a v-show="isLogin" class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_sign_out" id="btn_to_signout">登出</a>
						<div class="form-check form-switch ms-3">
							<input id="theme" class="form-check-input" type="checkbox" role="switch">
							<label id="icon_theme" class="form-check-label"></label>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { getAuth, onAuthStateChanged} from "firebase/auth";

export default {
	name: 'Header',
	props: {
		msg: String
	},
	methods: {
		isuser() {
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
					console.log("outtttttttttttttt");
					this.$store.commit('changeName', "");
					this.$store.commit('login_signout', false);
				}
			});
		}
	},
	computed: {
		isLogin(){
			return this.$store.state.islogin;
		},
		userName(){
			return this.$store.state.username;
		},
	},
	created(){
		this.isuser();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
