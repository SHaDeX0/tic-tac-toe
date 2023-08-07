import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './components/Register/Register'

const App = () => {
	const router = createBrowserRouter([
		{ path: '/', element: <Home /> },
		{ path: 'register', element: <Register /> },
		{ path: '*', element: <NotFound /> },
	])
	return <RouterProvider router={router} />
}

export default App
