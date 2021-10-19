import { createStore } from 'vuex'

export default createStore({
	state: {
		islogin: false,
		email: "",
		game_id: "",
		theme: "",
		toast_msg: "",
	},
	mutations: {
		login_signout (state, in_out){
			state.islogin = in_out;
		},
		changeEmail (state, email){
			state.email = email;
		},
		changeTheme (state, theme){
			state.theme = theme;
		},
		changeGameId (state, game_id){
			state.game_id = game_id;
		},
		changeMsg (state, toast_msg){
			state.toast_msg = toast_msg;
		}
	},
	actions: {
	},
	modules: {
	}
})
