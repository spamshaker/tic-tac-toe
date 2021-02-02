import engine from '../src/tic-tac-toe-engine';
import {wins, playerA} from '@ria-develop/tic-tac-toe-core/src/tic-tac-toe-core';

describe.each(wins)('given win sequence [%i,%i,%i]', (...sequence): void => {
  let board: Array<string | false>;
  beforeEach(() => {
    board = Array(9).fill(false);
    sequence.forEach((cell) => (board[cell] = playerA));
  });
  it('should win %j', () => {
    expect(engine(board)).toEqual(sequence);
  });
});
