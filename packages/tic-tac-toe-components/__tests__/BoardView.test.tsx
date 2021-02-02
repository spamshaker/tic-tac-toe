import React from 'react';
import BoardView from '../src/BoardView';
import {fireEvent, render, screen} from '@testing-library/react';

const mockEngine = (cells: (string | false)[]) => (cells ? null : []);

describe('given TicTacToe component', () => {
  it('should render 9 cells', () => {
    render(<BoardView engine={mockEngine} />);
    expect(screen.getAllByRole('button')).toHaveLength(9);
  });
});

describe('given moves that leads to game and', () => {
  const moves = [1, 0, 2, 4, 3, 5, 8, 6, 7];
  it('should populate all fields', () => {
    render(<BoardView engine={mockEngine} />);
    const cells = screen.getAllByRole('button');
    moves.forEach((nextCell, i) => {
      const cell = cells[nextCell];
      const player = i % 2 ? 'X' : 'O';
      fireEvent.click(cell);
      try {
        expect(cell.innerHTML).toEqual(player + '');
        screen.debug();
      } catch (e) {
        throw new Error(`the cell at ${nextCell} should be set by player: ${player}, but was: \n ${e.message}`);
      }
    });
  });
});
