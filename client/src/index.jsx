import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { lightTheme, darkTheme } from './theme'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
root.render(
	<React.StrictMode>
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
)
