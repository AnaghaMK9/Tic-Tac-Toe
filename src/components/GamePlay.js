import React, { useState } from 'react';
import Cell from './Cell';
import WinnerScreen from './WinnerScreen';

function GamePlay() {
    const [player, setPlayer] = useState('X');
    const [tiles, setTiles] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);
    const [tie, setTie] = useState(false);



    if (winner) return <WinnerScreen winner={winner} setWinner={setWinner} setTiles={setTiles} />
    if (tie) return <WinnerScreen winner={winner} setWinner={setWinner} setTiles={setTiles} tie={tie} setTie={setTie} />

    return (
        <div className='game-container'>
            <h1 className='title'>Tic Tac Toe</h1>
            <h3>Player: {player}</h3>
            <table>
                <tbody>
                    <tr>
                        <Cell tile={0} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                        <Cell tile={1} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                        <Cell tile={2} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                    </tr>
                    <tr>
                        <Cell tile={3} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                        <Cell tile={4} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                        <Cell tile={5} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                    </tr>
                    <tr>
                        <Cell tile={6} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                        <Cell tile={7} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                        <Cell tile={8} player={player} setPlayer={setPlayer} tiles={tiles} setTiles={setTiles} winner={winner} setWinner={setWinner} tie={tie} setTie={setTie} />
                    </tr>
                </tbody>
            </table>
            {/* {winner && (
                <p>Winner is: {winner}</p>
            ) } */}
        </div>
    )
}

export default GamePlay;