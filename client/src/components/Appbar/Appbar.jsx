import { AppBar, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

const Appbar = () => {
	return (
		<AppBar sx={{ height: '4.25rem', bgcolor: 'background.main', zIndex: theme => theme.zIndex.drawer + 1 }}>
			<Toolbar>
				<Typography variant='h3' component='div' color='primary' sx={{ flexGrow: 1 }}>
					Tic Tac Toe
				</Typography>
				<RouteLink to='register' style={{ textDecoration: 'none' }}>
					<Link underline='hover' variant='h6' sx={{ cursor: 'pointer' }}>
						Login / Sign-Up
					</Link>
				</RouteLink>
			</Toolbar>
		</AppBar>
	)
}

export default Appbar
