<template>
	<div class="modal" tabindex="-1" id="m_about">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content rounded-5 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<h2 class="fw-bold mb-0">About us</h2>
					<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
						<i class="bi bi-x-lg btn-x"></i>
					</button>
				</div>
				<div class="modal-body p-5 pt-0 d-flex justify-content-center">
					<a href="https://github.com/ckliao1993/ooxx" class="link-dark" target="_blank" data-bs-toggle="tooltip" title="Git Hub page">
						<i class="bi bi-github fs-1"></i>
					</a>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

export default {
	name: 'ModalAbout',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
