<template>
	<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
		<div id="toast_0" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
			<div class="toast-header">
				<i class="bi bi-megaphone-fill"></i>
				<strong class="me-auto mx-4">OOXX</strong>
				<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="toast-body text-start">
				{{message}}
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'bootstrap';

export default {
	name: 'Toast',
	props: {
		msg: String
	},
	computed: {
		message(){
			return this.$store.state.toast_msg;
		}
	},
}
				

</script>

<style scoped lang="scss">

</style>
