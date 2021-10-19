<template>
	<div class="modal" tabindex="-1" id="m_win">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 id="msg_color" class="fw-bold mb-0">{{title}}</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0">
					<h2 id="msg_con" class="fs-5 fw-bold mb-3" v-html="name"></h2>
					<div class="d-grid gap-2 d-md-flex justify-content-md-end">
						<button @click="newGame" class="btn btn-primary" type="button">開始新遊戲</button>
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
			title: "",
		}
	},
	methods: {
		show(name, loser){
			let m_this = new Modal(document.getElementById('m_win'));
			if(loser === 2){
				this.title = "平手";
				this.name = '你與對手不分上下';
			} else {
				let cla = loser ? 'oo' : 'xx';
				this.title = loser ?  "XX獲勝!!" : "OO獲勝!!";
				this.name = '<span class="' + cla + '">' + name + '</span> 贏了!!';
			}
			m_this.show();
		},
		newGame(){
			if(this.$store.state.islogin){
				document.getElementById('btn_new_game').click();
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.oo {color: var(--color-oo);}
.xx {color: var(--color-xx);}
</style>
