export const enum PLAYER {
  ONE = '😎',
  TWO = '🤢',
}

export type Cell = PLAYER | null;

export type Cells = Cell[];

export const INITIAL_CELLS: Cells = Array(9).fill(null);

export const getNextPlayer = (order: number) => {
  return order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;
};

const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export type Winner = {
  player: PLAYER;
  condition: [number, number, number];
} | null;

export const getWinner = (cells: Cells) => {
  let winner = null;

  for (const [x, y, z] of WINNER_CONDITIONS) {
    const player = cells[x];

    if (player && cells[y] === player && cells[z] === player) {
      winner = {
        player,
        condition: [x, y, z],
      };
      break;
    }
  }

  return winner as Winner;
};

export const getStatusMessage = (
  nextPlayer: PLAYER,
  winner: Winner,
  cells: Cells
) => {
  let statusMessage = `NEXT PLAYER ${nextPlayer}`;

  if (winner) {
    statusMessage = `WINNER! ${winner.player}`;
  }

  const isDraw = !winner && cells.every(Boolean);

  if (isDraw) {
    statusMessage = 'DRAW!';
  }

  return statusMessage;
};
