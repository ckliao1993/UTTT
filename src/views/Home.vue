<template>
	<div class="main d-flex flex-column justify-content-between align-items-center">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="container d-flex flex-column flex-fill justify-content-center">
			<h1 class="text-center title fw-bold ad">Ultimate Tic Tac Toe</h1>
			<hr class="my-4">
			<h3 class="text-center">- 遊戲教學 -</h3>
			<span>在大棋盤中連成直線來贏得遊戲，棋子只能被放入受限制的大棋盤格中，受限制的大棋盤格來自於您的對手在小棋盤中的上一步。當被送往已分出勝負的大棋盤格，就可以隨意選擇任何大棋盤格放置棋子。</span>
			<span class="mt-3">更多說明請看
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
