<template>
	<Header/>
	<router-view></router-view>
	<Toast/>
	<ModalStart/>
	<ModalAbout/>
	<ModalHow/>
	<ModalLogin/>
	<ModalSignout/>
</template>

<script>
import Toast from '@/components/Toast.vue'
import Header from '@/components/Header.vue'
import ModalStart from '@/components/ModalStart.vue'
import ModalAbout from '@/components/ModalAbout.vue'
import ModalHow from '@/components/ModalHow.vue'
import ModalLogin from '@/components/ModalLogin.vue'
import ModalSignout from '@/components/ModalSignout.vue'
export default {
	name: 'App',
	components: {
		Toast,
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




</style>