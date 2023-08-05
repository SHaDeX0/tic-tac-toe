import {
	computerTurn,
	restartGame,
	setUserLetter,
	setUserTurn,
	toggleUserLetter,
} from '../../Features/GameSlice/GameSlice'

export const boxClick = (userLetter, boxes, index, dispatch) => {
	if (boxes[index].letter !== 'm') return

	dispatch(setUserTurn())
	dispatch(setUserLetter(index))

	setTimeout(() => {
		const winResult = checkForWinner(boxes, dispatch)

		if (winResult === 'tie') {
			alert('Tie Game!')
			dispatch(toggleUserLetter())
		} else if (winResult === userLetter) {
			dispatch(toggleUserLetter())
			alert('You Win! Congratulations!')
		} else if (winResult === (userLetter === 'x' ? 'o' : 'x')) {
			alert('You Lose! Better luck next time...')
			dispatch(toggleUserLetter())
		}
	}, 1000)
}

const checkForWinner = (boxes, dispatch) => {
	const winningCombos = [
		[0, 1, 2], // top row
		[3, 4, 5], // middle row
		[6, 7, 8], // bottom row
		[0, 3, 6], // left column
		[1, 4, 7], // middle column
		[2, 5, 8], // right column
		[0, 4, 8], // left diagonal
		[2, 4, 6], // right diagonal
	]

	for (let i = 0; i < winningCombos.length; i++) {
		const [a, b, c] = winningCombos[i]

		if (boxes[a].letter !== 'm' && boxes[a].letter === boxes[b].letter && boxes[a].letter === boxes[c].letter) {
			console.log(winningCombos[i])
			return boxes[a].letter
		}
	}

	if (boxes.every(box => box.letter !== 'm')) {
		return 'tie'
	}

	if (boxes.some(box => box.letter === 'm')) {
		dispatch(computerTurn())
	}
}

export const restart = dispatch => {
	dispatch(restartGame())
}
