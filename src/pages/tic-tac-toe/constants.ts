export const INITIAL_CELLS = Array(9).fill(null);

export const enum PLAYER {
  ONE = '😎',
  TWO = '🤢',
}

export type Cells = (PLAYER | null)[];
