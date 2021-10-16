<template>
	<div class="modal" tabindex="-1" id="m_how">
		<div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 class="fw-bold mb-0">遊戲說明</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0 d-flex flex-column">
					<span>
						在大棋盤中連成直線來贏得遊戲，棋子只能被放入受限制的大棋盤格中，受限制的大棋盤格來自於您的對手在小棋盤中的上一步。當被送往已分出勝負的大棋盤格，就可以隨意選擇任何大棋盤格放置棋子。
					</span>
					<span class="mt-5">更多說明請看
						<a href="https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/" target="_blank"  data-bs-toggle="tooltip" title="Ultimate Tic-Tac-Toe
						">這裡</a>
					</span>		
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ModalHow',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
