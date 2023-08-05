import { Grid, Paper, SvgIcon } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { boxClick } from '../service/Game'

const Main = () => {
	const flex = { display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }
	const fontSize = 'large'

	const { boxes, userTurn, userLetter } = useSelector(state => state.game)
	const dispatch = useDispatch()

	const [mouseOver, setMouseOver] = React.useState(-1)

	return (
		<main className='main'>
			<Paper
				variant='outlined'
				square
				sx={{
					...flex,
					height: '100%',
					width: '100%',
					bgcolor: 'background.main',
				}}
			>
				<Grid container columns={3} gap={3} sx={{ ...flex, height: '30rem', width: '30rem', bgcolor: 'primary.alt' }}>
					{boxes.map((box, index) => (
						<Grid
							onMouseOver={() => setMouseOver(index)}
							onMouseOut={() => setMouseOver(-1)}
							onClick={() => boxClick(userLetter, boxes, index, dispatch)}
							key={index}
							sx={{ bgcolor: 'background.main', height: '30%', width: '30%', ...flex }}
						>
							{box?.letter === 'x' ? (
								<SvgIcon fontSize={fontSize} color='secondary'>
									<CloseIcon />
								</SvgIcon>
							) : box?.letter === 'o' ? (
								<SvgIcon fontSize={fontSize} color='secondary'>
									<CircleOutlinedIcon />
								</SvgIcon>
							) : mouseOver === index ? (
								<SvgIcon fontSize={fontSize} color='secondary'>
									{userTurn && userLetter === 'x' ? <CloseIcon /> : <CircleOutlinedIcon />}
								</SvgIcon>
							) : null}
						</Grid>
					))}
				</Grid>
			</Paper>
		</main>
	)
}

export default Main
