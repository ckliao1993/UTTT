<template>
	<div class="modal" tabindex="-1" id="m_log_in">
		<div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 class="fw-bold mb-0">登入</h2>
					<button type="button" ref="m_log_in_x" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0">
					<form id="f_log_in" @submit.prevent="submit">
						<div class="form-floating mb-3">
							<input v-model="form.name" type="text" class="form-control rounded-4" id="login_user" placeholder="Username">
							<label for="login_user">使用者名稱</label>
						</div>
						<div class="form-floating mb-3">
							<input v-model="form.password" type="password" class="form-control rounded-4" id="login_pwd" placeholder="Password">
							<label for="login_pwd">密碼</label>
						</div>
						<button id="btn_log_in" class="w-100 py-2 mb-2 btn btn-lg btn-secondary rounded-4" type="submit">登入</button>
					</form>
					<hr class="my-4">
					<h2 class="fs-5 fw-bold mb-3">還沒有帳號嗎? 現在就註冊!</h2>
					<button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" data-bs-toggle="modal" data-bs-target="#m_start">註冊</button>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default {
	name: 'ModalLogin',
	props: {
		msg: String
	},
	data (){
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
			let email = this.form.name + "@custom.com";
			signInWithEmailAndPassword(auth, email, this.form.password)
			.then((userCredential)=>{
				let user = userCredential.user
				console.log(user);
				this.$refs.m_log_in_x.click();
			})
			.catch((error) => {
				switch (error.code){
					case 'auth/wrong-password':
						alert('密碼錯誤');
						break;
					case 'auth/invalid-email':
						alert('使用者名稱錯誤');
						break;
					case 'auth/user-not-found':
						alert('找不到使用者');
						break;
					default:
						alert('登入錯誤，請再試一次。');
						console.log(error.code, error.message);
				}
			});
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
