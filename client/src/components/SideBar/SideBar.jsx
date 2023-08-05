import { Drawer, Icon, List, ListItem, Typography, useTheme } from '@mui/material'
import React from 'react'
import HistoryIcon from '@mui/icons-material/History'

const SideBar = () => {
	const theme = useTheme()
	return (
		<Drawer
			PaperProps={{ sx: { backgroundColor: theme.palette.background.main } }}
			variant='permanent'
			sx={{ '& .MuiDrawer-paper': { width: '17.5rem' }, overflow: 'auto' }}
			open
		>
			<List>
				<ListItem disablePadding>
					<Typography variant='h3'>History</Typography>
				</ListItem>
				<ListItem sx={{ display: 'flex', paddingLeft: '4rem', paddingTop: '1.5rem' }}>
					<Icon>
						<HistoryIcon />
					</Icon>
					<Typography variant='h5'>&nbsp;&nbsp;History</Typography>
				</ListItem>
			</List>
		</Drawer>
	)
}

export default SideBar
