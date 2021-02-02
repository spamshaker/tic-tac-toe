import {wins} from '@ria-develop/tic-tac-toe-core/src/tic-tac-toe-core';

const checkWin = (state: (string | false)[]): Readonly<number[]> | null => {
  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i];
    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
      return wins[i];
    }
  }
  return null;
};

export default checkWin;
