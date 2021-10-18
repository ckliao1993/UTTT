<template>
	<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div> -->
	<Header/>
	<router-view></router-view>
	<ModalStart/>
	<ModalAbout/>
	<ModalHow/>
	<ModalLogin/>
	<ModalSignout/>
</template>

<script>
import Header from '@/components/Header.vue'
import ModalStart from '@/components/ModalStart.vue'
import ModalAbout from '@/components/ModalAbout.vue'
import ModalHow from '@/components/ModalHow.vue'
import ModalLogin from '@/components/ModalLogin.vue'
import ModalSignout from '@/components/ModalSignout.vue'
export default {
	name: 'App',
	components: {
		Header,
		ModalStart,
		ModalAbout,
		ModalHow,
		ModalLogin,
		ModalSignout,
	},
}
</script>

<style lang="scss">
html, body, #app {
	margin: 0;
	height: 100%;
}
// #app {
// 	font-family: Avenir, Helvetica, Arial, sans-serif;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	text-align: center;
// 	color: #2c3e50;
// }
@media (min-width: 576px) {
	.container {
		height: 80vh;
		width: 80vh !important;
	}
}
@media (max-width: 576px) {
	.container {
		width: 90vw !important;
		height: 90vw;
	}
}
@font-face {
	font-family: AD;
	src: url(./assets/ArchitectsDaughter-Regular.ttf);
}
.ad {font-family: AD;}

:root {
	--color-bg: #e1e2d1;
	--color-bg-1: #fff;
	--color-bg-2: #fff;
	--color-text: #000;
	--color-text-r: #fff;
	--color-header: #779878;
	--color-primary: #5e8996;
	--color-primary-h: #7ea9b6;
	--color-secondary: #999da1;
	--color-shine: #ffff7ece;
	--color-shine-1: #779878;
	--color-oo: red;
	--color-xx: blue;
	--color-win-oo: #eb8080a2;
	--color-win-xx: #8aacec9d;
	--opacity-s: 1;
	--opacity-m: 1;
	--opacity-l: 1;
}
.dark {
	--color-bg: #333333;
	--color-bg-1: #555555;
	--color-bg-2: #707070;
	--color-text: #fff;
	--color-text-r: #000;
	--color-header: #070707;
	--color-primary: #43a7c5;
	--color-primary-h: #4ad2fc;
	--color-shine: #5e8996;
	--color-shine-1: #fcfcadce;
	--color-oo: #ff2424;
	--color-xx: #5fa55f;
	--color-win-oo: #ff4f4f21; 
	--color-win-xx: #55fd5521;
	--opacity-s: 0.38;
	--opacity-m: 0.6;
	--opacity-l: 0.87;
}

#app {
	color: var(--color-text);
	background-color: var(--color-bg);
}

body {
	
	
}
.main {
	padding-top: 5rem;
	height: 100%;

	opacity: var(--opacity-l);
}
.header {background-color: var(--color-header);}



/****************** Element Color setting ******************/
/******** Buttons *********/
.btn-primary {
	color: var(--color-text-r);
	background-color: var(--color-primary);
	border-color: var(--color-primary);
}
.btn-primary:hover {
	color: var(--color-text-r);
	background-color: var(--color-primary-h);
	border-color: var(--color-primary-h);
}
.btn-secondary {
	background-color: var(--color-secondary);
	border-color: var(--color-secondary);
}

/******** Modal *********/
.modal-content {background-color: var(--color-bg-1) !important;}
.link-dark {color: var(--color-text);}
.btn-x {color: var(--color-text);}
.bi-clipboard, .bi-check, .title {color: var(--color-primary);}

/******** Drop down menu *********/
// .tt {transform: translate(-100%, 0);} /* For second layer menu placement */
.dropdown-menu {background-color:  var(--color-bg-2);}
.dropdown-item {
	color: var(--color-text);
	opacity: var(--opacity-l)
}

/******** Form *********/
.form-check-input {cursor: pointer;}
.form-check-input:checked {background-color: var(--color-primary);}
.form-check-input:focus {border-color: var(--color-primary);}
.form-control[readonly] {background-color: var(--color-bg-2);}
.form-control:focus {
	background-color: var(--color-bg-2);
	color: var(--color-text);
} 
.form-control {
	background-color: var(--color-bg-2);
	color: var(--color-text);
}
/******** Toast *********/
.toast {
	background-color: rgba(255, 255, 255, 0.95);
	color: #000;
}
</style>