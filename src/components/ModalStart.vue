<template>
	<div class="modal" tabindex="-1" id="m_start">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<!-- <h5 class="modal-title">Modal title</h5> -->
					<h2 class="fw-bold mb-0">建立帳號</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0">
					<form id="f_register" @submit.prevent="submit">
						<div class="form-floating mb-3">
							<input v-model="form.name" name="username" type="text" class="form-control rounded-4" id="register_user" placeholder="Username">
							<label for="register_user">使用者名稱</label>
						</div>
						<div class="form-floating mb-3">
							<input v-model="form.password" name="password" type="password" class="form-control rounded-4" id="register_pwd" placeholder="Password">
							<label for="register_pwd">密碼</label>
						</div>
						<button id="btn_register" class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">註冊 & 開始遊戲</button>
						<small class="text-muted">當按下註冊，即代表同意本網站的使用條款。</small>
					</form>
					<hr class="my-4">
					<h2 class="fs-5 fw-bold mb-3">已有帳號?</h2>
					<button class="w-100 py-2 mb-2 btn btn-secondary rounded-4" data-bs-toggle="modal" data-bs-target="#m_log_in">登入</button>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";

export default {
	name: 'ModalStart',
	props: {
		msg: String
	},
	data () {
		return {
			form: {
				name: "",
				password: "",
			},
			error: null
		};
	},
	methods: {
		submit(){
			let auth = getAuth();
			let email = this.form.name + '@custom.com';
			createUserWithEmailAndPassword(auth, email, this.form.password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				if(this.$store.state.game_id == ""){
					this.newGame();
				} else {
					location.reload();
				}
			})
			.catch((error) => {
				switch (error.code){
					case 'auth/weak-password':
						alert('密碼必須至少含有6個字元');
						break;
					case 'auth/invalid-email':
						alert('使用者名稱不可包含符號');
						break;
					case 'auth/email-already-in-use':
						alert('使用者名稱已被使用');
						break;
					default:
						console.log(error.code, error.message);
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
				window.location.replace(game_url);
			});
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
