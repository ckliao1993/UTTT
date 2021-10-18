<template>
	<div class="modal" tabindex="-1" id="m_win">
		<div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 id="msg_color" class="fw-bold mb-0">{{winner}}</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0">
					<h2 id="msg_con" class="fs-5 fw-bold mb-3">{{name}}贏了!!</h2>
					<div class="d-grid gap-2 d-md-flex justify-content-md-end">
						<button class="btn btn-primary btn_new_game" type="button">開始新遊戲</button>
						<button class="btn btn-secondary" type="button" data-bs-dismiss="modal">好吧</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
	name: 'ModalWin',
	props: {
		msg: String
	},
	data(){
		return {
			name: "",
			winner: "",
		}
	},
	methods: {
		show(name, winner){
			this.winner = winner ? "XX獲勝!!" : "OO獲勝!!";
			this.name = name;
			let m_this = new Modal(document.getElementById('m_win'));
			m_this.show();
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
