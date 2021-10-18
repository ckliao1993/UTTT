<template>
	<div class="modal" tabindex="-1" id="m_loading">
		<div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down d-flex justify-content-center">
			<span class="text-white fw-bolder fs-1 text-center">Loading game data...</span>
		</div>
	</div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
	name: 'ModalLoading',
	props: {
		msg: String
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
