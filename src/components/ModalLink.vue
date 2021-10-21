<template>
	<div class="modal" tabindex="-1" id="m_create_link">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<!-- <h5 class="modal-title">Modal title</h5> -->
					<h2 class="fs-5 fw-bold mb-3">複製以下網址並傳給他人來開始遊戲</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0">
					<div class="d-flex justify-content-end align-items-center gap-3">
						<input id="invite_link" type="text" :value="url" class="form-control w-100 text-center" readonly onclick="this.select()">
						<a href="#" id="btn_copy" @click="copy">
							<i v-if="!check" class="fs-3 bi bi-clipboard"></i>
							<i v-if="check" class="fs-3 bi bi-check-lg"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
	name: 'ModalLink',
	props: {
		msg: String
	},
	data(){
		return {
			url: window.location.href,
			check: false,
		}
	},
	methods: {
		// Set link to input.
		link(){
			let m_this = new Modal(document.getElementById('m_create_link'));
			m_this.show();
		},
		// Copy icon onclick action.
		copy(){
			this.check = true;
			navigator.clipboard.writeText(this.url);
			setTimeout(()=>{
				this.check = false;
			}, 3000);
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
