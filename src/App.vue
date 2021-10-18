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
