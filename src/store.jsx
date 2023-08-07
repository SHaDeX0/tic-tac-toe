import { configureStore } from '@reduxjs/toolkit'
import GameSlice from './Features/GameSlice/GameSlice'

export const store = configureStore({
	reducer: {
		game: GameSlice,
	},
})
