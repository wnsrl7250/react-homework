import { useState } from 'react';
import Cell from './cell';
import { type Cells, getWinner, INITIAL_CELLS, PLAYER } from '../constants';

function Grid() {
  const [cells, setCells] = useState<Cells>(INITIAL_CELLS);

  const [order, setOrder] = useState<number>(0);

  const nextPlayer = order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  const winner = getWinner(cells);

  const handlePlay = (index: number) => {
    if (winner) {
      console.log(`게임오버 ${winner.player}`);
      return;
    }

    const nextOrder = order + 1;
    setOrder(nextOrder);

    const nextCells = cells.map((cell, i) => (index !== i ? cell : nextPlayer));
    setCells(nextCells);
  };

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-3">
      {cells.map((cell, index) => {
        let winnerClasses = '';

        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerClasses = 'outline2 outline-amber-500 bg-amber-500/30';
          }
        }

        return (
          <Cell
            key={index}
            className={winnerClasses}
            onPlay={() => handlePlay(index)}
          >
            {cell}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;
