import { useState } from 'react';
import Cell from './cell';
import { type Cells, INITIAL_CELLS, PLAYER } from '../constants';

function Grid() {
  // 게임 보드 셀
  const [cells] = useState<Cells>(INITIAL_CELLS);

  // 게임 순서
  const [order, setOrder] = useState<number>(0);

  // 다음 플레이어
  const nextPlayer = order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  // 게임 상태 업데이트
  const handlePlay = (index: number) => {
    const nextOrder = order + 1;
    setOrder(nextOrder);
    console.log(index, 'click', nextPlayer);
  };

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-3">
      {cells.map((cell, index) => {
        return (
          <Cell key={index} onPlay={() => handlePlay(index)}>
            {index}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;
