import { createTheme } from '@mui/material'

const typography = {
	fontFamily: ['Outfit', 'sans-serif'].join(','),
}

export const lightTheme = createTheme({
	typography,
	palette: {
		mode: 'light',
		primary: {
			main: '#9448BC',
			alt: '#B079CD',
		},
		secondary: {
			main: '#E1BC29',
			alt: '#F0EB8D',
		},
		background: {
			main: '#e8e7eF',
		},
		game: {
			background: '#e8e7eF',
		},
	},
})

export const darkTheme = createTheme({
	typography,
	palette: {
		mode: 'dark',
		primary: {
			main: '#B079CD',
			alt: '#9448BC',
		},
		secondary: {
			main: '#E1BC29',
			alt: '#F0EB8D',
		},
		background: {
			main: '#202123',
		},
		game: {
			background: '#181818',
			item: '#252525',
		},
	},
})
