import { Box, Button, Grid, Paper, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { boxClick, handleWinResult, restart } from '../service/Game'
import ReplayIcon from '@mui/icons-material/Replay'

const Main = () => {
	const flex = { display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }
	const fontSize = 'large'

	const { boxes, userTurn, userLetter, gameOver } = useSelector(state => state.game)
	const dispatch = useDispatch()

	const [mouseOver, setMouseOver] = React.useState(-1)
	const [gameOverMessage, setGameOverMessage] = React.useState('')
	const [restartButtonVariant, setRestartButtonVariant] = React.useState('contained')

	React.useEffect(() => {
		setGameOverMessage(handleWinResult(boxes, dispatch, userLetter, userTurn))
	}, [boxes, dispatch, userLetter, userTurn])

	return (
		<main className='main'>
			<Paper
				variant='outlined'
				square
				sx={{
					...flex,
					flexDirection: 'column',
					gap: '1rem',
					height: '100%',
					width: '100%',
					bgcolor: 'background.main',
				}}
			>
				{gameOver && (
					<Box sx={{ ...flex, flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
						<Typography textTransform={'capitalize'} variant='h3' sx={{ color: 'primary.main' }}>
							{gameOverMessage}
						</Typography>
						<Button
							onClick={() => restart(dispatch)}
							onMouseOver={() => setRestartButtonVariant('outlined')}
							onMouseOut={() => setRestartButtonVariant('contained')}
							variant={restartButtonVariant}
							sx={{ fontSize }}
						>
							<SvgIcon fontSize={fontSize}>
								<ReplayIcon />
							</SvgIcon>
							Restart
						</Button>
					</Box>
				)}
				<Grid container columns={3} gap={3} sx={{ ...flex, height: '30rem', width: '30rem', bgcolor: 'primary.alt' }}>
					{boxes.map((box, index) => (
						<Grid
							key={index}
							onMouseOver={() => {
								if (!gameOver) setMouseOver(index)
							}}
							onMouseOut={() => {
								if (!gameOver) setMouseOver(-1)
							}}
							onClick={() => {
								if (!gameOver) boxClick(boxes, index, dispatch)
							}}
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
								<SvgIcon fontSize={fontSize} sx={{ color: 'secondary.alt' }}>
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
