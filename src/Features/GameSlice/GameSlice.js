import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	boxes: [
		{ letter: 'm' },
		{ letter: 'm' },
		{ letter: 'm' },
		{ letter: 'm' },
		{ letter: 'm' },
		{ letter: 'm' },
		{ letter: 'm' },
		{ letter: 'm' },
		{ letter: 'm' },
	],
	userLetter: 'x',
	userTurn: true,
	gameOver: false,
}

const GameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setUserLetter: (state, action) => {
			state.boxes[action.payload].letter = state.userLetter
		},
		setUserTurn: state => {
			state.userTurn = !state.userTurn
		},
		computerTurn: state => {
			let randomIndex = Math.floor(Math.random() * 9)
			while (state.boxes[randomIndex].letter !== 'm') {
				randomIndex = Math.floor(Math.random() * 9)
			}

			state.boxes[randomIndex].letter = state.userLetter === 'x' ? 'o' : 'x'
			state.userTurn = !state.userTurn
		},
		setGameOver: state => {
			state.gameOver = true
		},
		restartGame: state => {
			state.boxes = [
				{ letter: 'm' },
				{ letter: 'm' },
				{ letter: 'm' },
				{ letter: 'm' },
				{ letter: state.userLetter === 'x' ? 'x' : 'm' },
				{ letter: 'm' },
				{ letter: 'm' },
				{ letter: 'm' },
				{ letter: 'm' },
			]
			state.userLetter = state.userLetter === 'x' ? 'o' : 'x'
			state.userTurn = true
			state.gameOver = false
		},
	},
})

export const { setUserLetter, setUserTurn, computerTurn, setGameOver, restartGame } = GameSlice.actions
export default GameSlice.reducer
