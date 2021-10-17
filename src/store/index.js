import { createStore } from 'vuex'

export default createStore({
	state: {
		islogin: false,
		username: "",
		game_id: "",
		theme: "light",
	},
	mutations: {
		login_signout (state, in_out){
			state.islogin = in_out;
		},
		changeName (state, name){
			state.username = name;
		},
		changeTheme (state, theme){
			state.theme = theme;
		},
		changeGameId (state, game_id){
			state.game_id = game_id;
		}
	},
	actions: {
	},
	modules: {
	}
})
