import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import Appbar from '../Appbar/Appbar'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'

const Home = () => {
	return (
		<Grid container>
			<Appbar />
			<SideBar />
			<Main />
		</Grid>
	)
}

export default Home
