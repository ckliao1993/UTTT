<template>
	<header class="py-3 mb-3 border-bottom fixed-top header bg-primary">
		<div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
			<a class="navbar-brand fw-bold fs-1 text-light lh-1 ad px-3" href="/">O O X X</a>
			<div class="d-flex flex-row-reverse">
				<div id="d_big" class="flex-shrink-0 dropdown btn-group">
					<a href="#" class="d-block link-dark text-decoration-none dropdown-toggle text-light fs-2" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
						<i class="bi bi-list"></i>
					</a>
					<ul id="d_one" class="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser2">
						<a class="dropdown-item btn_new_game" href="#">新遊戲</a>
						<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_how">遊戲說明</a>
						<hr class="dropdown-divider">
						<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_log_in" id="btn_to_login">登入</a>
						<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#m_sign_out" id="btn_to_signout">登出</a>
						<div class="form-check form-switch ms-3">
							<input id="theme" class="form-check-input" type="checkbox" role="switch">
							<label id="icon_theme" class="form-check-label"></label>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</header>
	<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div> -->
	<router-view></router-view>
</template>

<style lang="scss">
html, body, #app {
	margin: 0;
	height: 100%;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

// #nav {
// 	padding: 30px;

// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;

// 		&.router-link-exact-active {
// 		color: #42b983;
// 		}
// 	}
// }
@font-face {
	font-family: AD;
	src: url(./assets/ArchitectsDaughter-Regular.ttf);
}
.ad {font-family: AD;}

</style>
<script>

</script>
