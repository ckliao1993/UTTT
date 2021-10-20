<template>
	<div class="main d-flex align-items-center">
		<div class="container" xmlns="http://www.w3.org/2000/svg">
			<div class="row big g-0 top">
				<div class="cell big col-4 left">
					<div class="board small" :class="[{allow: allowed[0]}, sets[0]]" data-boardno="0">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(0)" v-html="addPiece(0)" data-cellno="0" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(1)" v-html="addPiece(1)" data-cellno="1" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(2)" v-html="addPiece(2)" data-cellno="2" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(3)" v-html="addPiece(3)" data-cellno="3" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(4)" v-html="addPiece(4)" data-cellno="4" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(5)" v-html="addPiece(5)" data-cellno="5" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(6)" v-html="addPiece(6)" data-cellno="6" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(7)" v-html="addPiece(7)" data-cellno="7" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(8)" v-html="addPiece(8)" data-cellno="8" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
				<div class="cell big col-4 center">
					<div class="board small" :class="[{allow: allowed[1]}, sets[1]]" data-boardno="1">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(9)" v-html="addPiece(9)" data-cellno="9" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(10)" v-html="addPiece(10)" data-cellno="10" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(11)" v-html="addPiece(11)" data-cellno="11" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(12)" v-html="addPiece(12)" data-cellno="12" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(13)" v-html="addPiece(13)" data-cellno="13" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(14)" v-html="addPiece(14)" data-cellno="14" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(15)" v-html="addPiece(15)" data-cellno="15" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(16)" v-html="addPiece(16)" data-cellno="16" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(17)" v-html="addPiece(17)" data-cellno="17" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
				<div class="cell big col-4 right">
					<div class="board small" :class="[{allow: allowed[2]}, sets[2]]" data-boardno="2">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(18)" v-html="addPiece(18)" data-cellno="18" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(19)" v-html="addPiece(19)" data-cellno="19" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(20)" v-html="addPiece(20)" data-cellno="20" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(21)" v-html="addPiece(21)" data-cellno="21" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(22)" v-html="addPiece(22)" data-cellno="22" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(23)" v-html="addPiece(23)" data-cellno="23" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(24)" v-html="addPiece(24)" data-cellno="24" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(25)" v-html="addPiece(25)" data-cellno="25" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(26)" v-html="addPiece(26)" data-cellno="26" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="row big g-0 mid">
				<div class="cell big col-4 left">
					<div class="board small" :class="[{allow: allowed[3]}, sets[3]]" data-boardno="3">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(27)" v-html="addPiece(27)" data-cellno="27" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(28)" v-html="addPiece(28)" data-cellno="28" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(29)" v-html="addPiece(29)" data-cellno="29" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(30)" v-html="addPiece(30)" data-cellno="30" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(31)" v-html="addPiece(31)" data-cellno="31" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(32)" v-html="addPiece(32)" data-cellno="32" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(33)" v-html="addPiece(33)" data-cellno="33" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(34)" v-html="addPiece(34)" data-cellno="34" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(35)" v-html="addPiece(35)" data-cellno="35" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
				<div class="cell big col-4 center">
					<div class="board small" :class="[{allow: allowed[4]}, sets[4]]" data-boardno="4">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(36)" v-html="addPiece(36)" data-cellno="36" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(37)" v-html="addPiece(37)" data-cellno="37" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(38)" v-html="addPiece(38)" data-cellno="38" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(39)" v-html="addPiece(39)" data-cellno="39" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(40)" v-html="addPiece(40)" data-cellno="40" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(41)" v-html="addPiece(41)" data-cellno="41" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(42)" v-html="addPiece(42)" data-cellno="42" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(43)" v-html="addPiece(43)" data-cellno="43" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(44)" v-html="addPiece(44)" data-cellno="44" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
				<div class="cell big col-4 right">
					<div class="board small" :class="[{allow: allowed[5]}, sets[5]]" data-boardno="5">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(45)" v-html="addPiece(45)" data-cellno="45" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(46)" v-html="addPiece(46)" data-cellno="46" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(47)" v-html="addPiece(47)" data-cellno="47" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(48)" v-html="addPiece(48)" data-cellno="48" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(49)" v-html="addPiece(49)" data-cellno="49" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(50)" v-html="addPiece(50)" data-cellno="50" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(51)" v-html="addPiece(51)" data-cellno="51" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(52)" v-html="addPiece(52)" data-cellno="52" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(53)" v-html="addPiece(53)" data-cellno="53" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="row big g-0 bottom">
				<div class="cell big col-4 left">
					<div class="board small" :class="[{allow: allowed[6]}, sets[6]]" data-boardno="6">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(54)" v-html="addPiece(54)" data-cellno="54" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(55)" v-html="addPiece(55)" data-cellno="55" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(56)" v-html="addPiece(56)" data-cellno="56" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(57)" v-html="addPiece(57)" data-cellno="57" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(58)" v-html="addPiece(58)" data-cellno="58" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(59)" v-html="addPiece(59)" data-cellno="59" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(60)" v-html="addPiece(60)" data-cellno="60" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(61)" v-html="addPiece(61)" data-cellno="61" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(62)" v-html="addPiece(62)" data-cellno="62" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
				<div class="cell big col-4 center">
					<div class="board small" :class="[{allow: allowed[7]}, sets[7]]" data-boardno="7">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(63)" v-html="addPiece(63)" data-cellno="63" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(64)" v-html="addPiece(64)" data-cellno="64" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(65)" v-html="addPiece(65)" data-cellno="65" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(66)" v-html="addPiece(66)" data-cellno="66" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(67)" v-html="addPiece(67)" data-cellno="67" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(68)" v-html="addPiece(68)" data-cellno="68" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(69)" v-html="addPiece(69)" data-cellno="69" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(70)" v-html="addPiece(70)" data-cellno="70" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(71)" v-html="addPiece(71)" data-cellno="71" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
				<div class="cell big col-4 right">
					<div class="board small" :class="[{allow: allowed[8]}, sets[8]]" data-boardno="8">
						<div class="row small g-0 top">
							<div @click="makeAmove($event)" :class="addLast(72)" v-html="addPiece(72)" data-cellno="72" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(73)" v-html="addPiece(73)" data-cellno="73" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(74)" v-html="addPiece(74)" data-cellno="74" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 mid">
							<div @click="makeAmove($event)" :class="addLast(75)" v-html="addPiece(75)" data-cellno="75" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(76)" v-html="addPiece(76)" data-cellno="76" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(77)" v-html="addPiece(77)" data-cellno="77" class="cell small d-flex col-4 right"></div>
						</div>
						<div class="row small g-0 bottom">
							<div @click="makeAmove($event)" :class="addLast(78)" v-html="addPiece(78)" data-cellno="78" class="cell small d-flex col-4 left"></div>
							<div @click="makeAmove($event)" :class="addLast(79)" v-html="addPiece(79)" data-cellno="79" class="cell small d-flex col-4 center"></div>
							<div @click="makeAmove($event)" :class="addLast(80)" v-html="addPiece(80)" data-cellno="80" class="cell small d-flex col-4 right"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ModalWin ref="win"/>
	<ModalLink ref="link"/>
	<ModalInvite ref="invite"/>
	<ModalLoading ref="load"/>
</template>

<script>
import ModalWin from '@/components/ModalWin.vue'
import ModalLink from '@/components/ModalLink.vue'
import ModalInvite from '@/components/ModalInvite.vue'
import ModalLoading from '@/components/ModalLoading.vue'
import { getAuth} from "firebase/auth";
import { getDatabase, ref, set,	update, onValue } from "firebase/database";
import { Modal } from 'bootstrap';
import { Toast } from 'bootstrap';
const auth = getAuth();
const database = getDatabase();
let game, player, t_this;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//llkj
export default {
	name: 'Play',
	components: {
		Toast,
		ModalWin,
		ModalLink,
		ModalInvite,
		ModalLoading,
	},
	data(){
		return {
			moves: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
			sets: [,,,,,,,,],
			allowed: [,,,,,,,,],
			lastOne: "",
		}
	},
	methods:{
		addLast(where){
			if(this.lastOne === where){
				return 'last';
			}
		},
		addPiece(where){
			if(parseInt(this.moves[where]) === 0){
				return '<svg width="80%" height="80%" fill="var(--color-oo)" class="bi bi-oo bi-circle mx-auto my-auto" viewBox="0 0 16 16"><path d="M 8 14 A 6 6 90 1 1 8 2 a 6 6 90 0 1 0 12 z m 0 2 A 8 8 90 1 0 8 0 a 8 8 90 0 0 0 16 z"/></svg>';
			} else if(parseInt(this.moves[where]) === 1) {
				return '<svg width="90%" height="90%" fill="var(--color-xx)" class="bi bi-xx bi-x-lg mx-auto my-auto" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M 13.7 2.3 a 0.5 0.9 0 0 1 0 1.6 l -9.7 9.7 a 0.5 0.5 0 0 1 -1.6 -1.6 l 9.7 -9.7 a 0.9 0.5 0 0 1 1.6 -0 Z "/><path fill-rule="evenodd" clip-rule="evenodd" d="M 2.3 2.3 a 0.5 0.9 0 0 0 0 1.6 l 9.7 9.7 a 0.5 0.5 0 0 0 1.6 -1.6 l -9.7 -9.7 a 0.9 0.5 0 0 0 -1.6 0 Z"/></svg>';
			}
		},
		initGame(){
			let param = this.$route.params.game_id;
			onValue(ref(database, '/games/' + param), (snapshot) => {
				if(snapshot.exists()){
					game = snapshot.val();
					console.log(game);
					game.sets = game.sets.split(',');
					game.moves = game.moves.split(',');
					game.moves.forEach((value, index)=>{
						if(value){
							game.moves[index] = parseInt(value);
							this.moves[index] = parseInt(value);
						}
					});
					game.sets.forEach((value, index)=>{
						if(value){
							game.sets[index] = parseInt(value);
							this.sets[index] = 'bg-' + value;
						}
					});
					this.$store.commit('changeGameId', param);
					this.lastOne = parseInt(game.last);
					this.$refs.load.toggleLoad(false);
					if(game.over !== ''){
						let loser = parseInt(game.over);
						console.log(loser);
						let win_name = loser ?  game.p2.split('@')[0] : game.p1.split('@')[0];
						console.log(win_name);
						this.$refs.win.show(win_name, loser);
						return;
					} else {
						this.checkUserState();
					}
				} else {
					alert('網址錯了哦~');
				}
			});
		},
		checkWin(this_game){
			//check tie?
			let tie = true;
			for (let j = 0; j <= 8; j++){
				// no cell is empty
				if(this_game[j] === '' ){
					tie = false;
					break;
				}
			}
			//check win?
			for (let i = 0; i <= 7; i++) {
				const winCondition = winningConditions[i];
				let a = this_game[winCondition[0]];
				let b = this_game[winCondition[1]];
				let c = this_game[winCondition[2]];
				if (a === '' || b === '' || c === '') {
					continue;
				}
				if (a === b && b === c && a !== 2) {
					return a;
				}
			}
			if(tie){return 2;}

		},
		makeAmove(event){
			let click = event.target.dataset.cellno || event.target.parentElement.dataset.cellno;
			if(game.over !== ''){
				let winner = parseInt(game.over);
				let win_name = winner ?  game.p2.split('@')[0] : game.p1.split('@')[0];
				this.$refs.win.show(win_name, loser);
				return;
			}
			if(!this.$store.state.email){
				let m_start = new Modal(document.getElementById('m_start'));
				m_start.show();
				return;
			} else if (this.$store.state.email !== game.p1 && this.$store.state.email !== game.p2){
				this.$store.commit('changeMsg', game.p1.split("@")[0]+'與'+game.p2.split("@")[0]+'正在對戰中');
				t_this.show();
				return;
			}
			if(game.now !== player){
				this.$store.commit('changeMsg', '現在是對手的回合');
				t_this.show();
				return;
			}
			if(this.moves[click] === 1 || this.moves[click] === 0){
				this.$store.commit('changeMsg', '想幹嘛?');
				t_this.show();
				return;
			}
			if(this.allowed[Math.floor(click/9)] == 1){
				this.updateDB(click);
				this.allowed = [,,,,,,,,];
				this.lastOne = "";
			} else {
				this.$store.commit('changeMsg', '請將棋子放入閃爍的大棋盤格中');
				t_this.show();
			}
		},
		async updateDB(last){
			let updates = {};
			let board = Math.floor(last / 9);
			let next = last % 9;
			game.moves[last] = player;
			let win = await this.checkWin(game.moves.slice(board*9, board*9+9));
			console.log('win', win);
			console.log('next', next);
			console.log('board', board);
			console.log('sets', game.sets);
			if(win !== undefined){
				game.sets[board] = win;
				let winner = await this.checkWin(game.sets);
				console.log('winner', winner);
				if(winner !== undefined){
					updates['/games/' + this.$store.state.game_id + '/over'] = winner;
				}
			}
			if(game.sets[next] !== ''){next = 9;}
			updates['/games/' + this.$store.state.game_id + '/moves'] = game.moves.join(',');
			updates['/games/' + this.$store.state.game_id + '/sets'] = game.sets.join(',');
			updates['/games/' + this.$store.state.game_id + '/now'] = player?0:1;
			updates['/games/' + this.$store.state.game_id + '/next'] = next;
			updates['/games/' + this.$store.state.game_id + '/last'] = last;
			update(ref(database), updates).then(()=>{
			});
		},
		checkUserState(){
			if(!this.$store.state.islogin){
				if(game.p2 == ""){
					this.$refs.invite.invite(game.p1.split('@')[0]);
				} else if (game.p2){
					this.$store.commit('changeMsg', game.p1.split("@")[0]+'與'+game.p2.split("@")[0]+'正在對戰中');
					t_this.show();
				}
			} else if (game.p1 == this.$store.state.email){
				//p1
				player = 0;
				if(game.last == 81){this.$refs.link.link();}
				this.light(player);
			} else if (game.p2 == ""){
				//no p2
				this.joinGame(this.$store.state.email);
			} else if (game.p2 == this.$store.state.email){
				//p2
				player = 1;
				this.light(player);
			} else {
				alert('抱歉，有人搶先一步接受了對戰邀請');
				this.$store.commit('changeMsg', game.p1.split("@")[0]+'與'+game.p2.split("@")[0]+'正在對戰中');
				t_this.show();
			}
			
		},
		light(player){
			if(game.now == player){
				let other = player ? game.p1.split('@')[0] : game.p2.split('@')[0] ;
				if(game.next == 9){
					// Allow it all.
					game.sets.forEach((value, index)=>{
						if(value === ''){this.allowed[index] = 1;}});
				} else {
					// Allow it.
					this.allowed[game.next] = 1;
				}
				if(game.last<81){
					this.$store.commit('changeMsg', other + " 下了一顆棋子");
					t_this.show();
				}
			}
		},
		joinGame(email){
			let updates = {};
			updates['/games/' + this.$store.state.game_id + '/p2'] = email;
			update(ref(database), updates).then(()=>{});
			this.$store.commit('changeMsg', '歡迎來到 OOXX');
			t_this.show();
		},
	},
	created(){
		this.initGame();
	},
	mounted(){
		t_this = new Toast(document.getElementById('toast_0'));
		this.$refs.load.toggleLoad(true);
	},
	computed:{
	},
	watch: {
		$route(to, from) {
		// react to route changes...
		}
	},
}


</script>
<style scoped>

.board.small {
	height: 80%;
	width: 80%;
	margin: 10% auto;
	border-radius: 1rem;
}
.cell.small {
	font-size: 2em;
	text-align: center;
}
.cell.small:hover {background-color: rgb(189, 189, 189);}
.row{height: 33.33%;}
.allow {
	cursor: pointer;
	animation: blinker 1.5s linear infinite;
}
@keyframes blinker {
	50% {
		background-color: var(--color-shine);
	}
}
.last {
	animation: blinker1 1s linear infinite;
}
@keyframes blinker1 {
	50% {
		/* opacity: 0; */
		background-color: var(--color-shine-1);
	}
}
.small {border-width: 1px !important;}
.bg-0 {background-color: var(--color-win-oo);}
.bg-1 {background-color: var(--color-win-xx);}
.bg-2 {opacity: 0.3;}
.top {border-bottom: 3px solid var(--color-text);}
.bottom {border-top: 3px solid var(--color-text);}
.left {border-right: 3px solid var(--color-text);}
.right {border-left: 3px solid var(--color-text);}

</style>
