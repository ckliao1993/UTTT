<template>
	<div class="modal" tabindex="-1" id="m_sign_out">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 class="fw-bold mb-0">登出</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0">
					<h2 class="fs-5 fw-bold mb-3">確定要登出?</h2>
					<div class="d-grid gap-2 d-md-flex justify-content-md-end">
						<button @click="signout" id="btn_sign_out" class="btn btn-secondary" type="button">是的</button>
						<button class="btn btn-primary" type="button" data-bs-dismiss="modal">不了</button>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
import {getAuth, signOut} from 'firebase/auth'

export default {
	name: 'ModalSignout',
	props: {
		msg: String
	},
	methods: {
		signout(){
			let auth = getAuth();
			signOut(auth).then(() => {
				// Sign-out successful.
				window.location.replace('/ooxx/');
			}).catch((error) => {
				// An error happened.
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
