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
}

const GameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		toggleUserLetter: state => {
			state.userLetter = state.userLetter === 'x' ? 'o' : 'x'
		},
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
		restartGame: state => {
			state = initialState
		},
	},
})

export const { setUserLetter, setUserTurn, computerTurn, restartGame, toggleUserLetter } = GameSlice.actions
export default GameSlice.reducer
