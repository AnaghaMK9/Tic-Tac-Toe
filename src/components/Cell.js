import React from 'react';

function Cell({ tile, player, setPlayer, tiles, setTiles, winner, setWinner, setTie, tie }) {
    const checkWinner = (cells) => {
        let winners = [
            [0, 4, 8],
            [2, 4, 6],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]



        if (cells.indexOf('') === -1) {
            setTie(true);
        } else {
            winners.forEach((item) => {
                const [x, y, z] = item;
                if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
                    setWinner(cells[x]);
                }
            })
        }
    }


    const onClick = () => {
        if (tiles[tile] !== '') {
            alert('Oops already clicked!');
        } else {
            let cells = [...tiles];
            if (player === 'X') {
                cells[tile] = 'X';
                setPlayer('O');
            } else {
                cells[tile] = 'O';
                setPlayer('X');
            }
            checkWinner(cells);
            setTiles(cells);
        }
    }

    return (
        <td onClick={onClick}>{tiles[tile]}</td>
    )
}

export default Cell;