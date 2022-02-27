import React from 'react'

function WinnerScreen({ setWinner, setTiles, winner, tie, setTie }) {
    const resetGame = () => {
        setWinner(null);
        setTiles(Array(9).fill(''));
        if (tie) {
            setTie(false);
        }
    }

    return (
        <div className='winner-screen'>
            {winner && <p>Congratulations to Player {winner}!!</p>}
            {tie && <p>Oh looks like its a tie!</p>}
            <button onClick={resetGame}>Play Again</button>
        </div>
    )
}

export default WinnerScreen;