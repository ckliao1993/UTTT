<template>
	<div class="main d-flex flex-column justify-content-between align-items-center">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="container d-flex flex-column flex-fill justify-content-center">
			<h1 class="text-center title fw-bold ad">Ultimate Tic Tac Toe</h1>
			<hr class="my-4">
			<h3 class="text-center">- 遊戲教學 -</h3>
			<ul>
				<li>每一輪，你都可以在一個<span class="text-warning">小九宮格</span>中下一顆棋子。</li>
				<li>你的棋子在<span class="text-warning">小九宮格</span>內的方位，將會決定對手下一輪可以下的<span class="text-warning">大九宮格</span>方位。</li>
				<li>如果那一格<span class="text-warning">大九宮格</span>已經分出勝負、或是無法下子，就可以在其他任何地方下子。</li>
				<li>贏得小九宮格來佔領大九宮格格子，在大九宮格連成直線就可以贏得遊戲。</li>
			</ul>
			<span>更多說明(原文)請看
				<a href="https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/" target="_blank"  data-bs-toggle="tooltip" title="Ultimate Tic-Tac-Toe
				">這裡</a>
			</span>		
			<hr class="my-4">
			<div class="d-grid">
				<button v-show="login" @click="newGame" class="btn btn-primary">開始遊戲</button>
				<button v-show="!login" id="btn_start" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#m_start">開始遊戲</button>
			</div>
		</div>
		<div>
			<a href="#" data-bs-toggle="modal" data-bs-target="#m_about">About</a>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	methods: {
		newGame(){
			if(this.$store.state.islogin){
				document.getElementById('btn_new_game').click();
			}
		}
	},
	computed:{
		login(){
			return this.$store.state.islogin;
		}
	},
}


</script>
<style>

</style>
