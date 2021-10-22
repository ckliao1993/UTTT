<template>
	<div class="modal" tabindex="-1" id="m_how">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 class="fw-bold mb-0">遊戲說明</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0 d-flex flex-column">
					<ul class="lh-lg">
						<li>每一輪，你都可以在一個<span class="text-high">小九宮格</span>中下一顆棋子。</li>
						<li>你的棋子在<span class="text-high">小九宮格</span>內的方位，將會決定對手下一輪可以下的<span class="text-high">大九宮格</span>方位。</li>
						<li>如果那一格<span class="text-high">大九宮格</span>已經分出勝負、或是無法下子，就可以在其他任何地方下子。</li>
						<li>贏得小九宮格來佔領大九宮格格子，在大九宮格連成直線就可以贏得遊戲。</li>
					</ul>
					<span class="mt-5">更多說明(原文)請看
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
