<template>
	<div class="modal" tabindex="-1" id="m_loading">
		<div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
			<span class="text-white fw-bolder fs-1 text-center">Loading game data...</span>
		</div>
	</div>
</template>

<script>
import { Modal } from 'bootstrap';
let m_load;
export default {
	name: 'ModalLoading',
	props: {
		msg: String
	},
	methods:{
		toggleLoad(status){
			if(status){
				m_load.show();
			} else {
				m_load.hide();
			}
			
		}
	},
	mounted(){
		m_load = new Modal(document.getElementById('m_loading'));
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
