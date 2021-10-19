<template>
	<div class="modal" tabindex="-1" id="m_invite">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 class="fw-bold mb-0" v-html="challenger"></h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0">
					<h2 class="fs-5 fw-bold mb-3">是否要接受挑戰?</h2>
					<div class="d-grid gap-2 d-md-flex justify-content-md-end">
						<button class="btn btn-secondary" type="button" data-bs-dismiss="modal">不了</button>
						<button data-bs-toggle="modal" data-bs-target="#m_start" class="btn btn-primary" type="button">是的</button>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
import { Modal } from 'bootstrap';

export default {
	name: 'ModalInvite',
	props: {
		msg: String
	},
	data(){
		return {
			challenger: "",
		};
	},
	methods: {
		invite(challenger){
			this.challenger = "<span class='oo'>" + challenger + "</span> 想要挑戰你";
			let m_this = new Modal(document.getElementById('m_invite'));
			m_this.show();
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.oo {color: var(--color-oo);}
</style>
