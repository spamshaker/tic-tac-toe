import React, {useEffect, useState} from 'react';
import './BoardView.less';
import BoardViewOverlay from './BoardViewOverlay';
import {playerA, playerB} from '@ria-develop/tic-tac-toe-core/src/tic-tac-toe-core';
import {block} from 'bem-cn';

const b = block('board');

type BoardViewProps = {
  engine: (cells: (string | false)[]) => Readonly<number[]> | null;
  ai?: (cells: (string | false)[]) => number;
};

const BoardView = (props: BoardViewProps): JSX.Element => {
  const {engine, ai} = props;
  const [cells, setCell]: [(string | false)[], (value: (string | false)[]) => void] = useState(Array(9).fill(false));
  const [player, setPlayer]: [string, (value: string) => void] = useState(playerA);
  const [wins, setWins]: [Readonly<number[]> | null, (value: Readonly<number[]> | null) => void] = useState<Readonly<
    number[]
  > | null>(null);

  const toggleCell = (cell: number) => {
    if (wins) {
      return;
    }
    const newCells = Object.assign([], cells, {[cell]: player});
    setCell(newCells);
    const newWins = engine(newCells);
    setWins(newWins);
    if (newWins) {
      // Display Winner: player;
    } else {
      setPlayer(player === playerA ? playerB : playerA);
    }
  };

  useEffect(() => {
    if (wins) {
      return;
    }
    if (player === playerB && ai) {
      toggleCell(ai(cells));
    }
  }, [player, cells, wins]);

  return (
    <div className={b()}>
      {cells.map((cell, i) => (
        <button className={b('cell', {selected: !!cell})} key={i} onClick={() => !cell && toggleCell(i)}>
          {cell || ''}
        </button>
      ))}
      {wins && <BoardViewOverlay data={wins} />}
    </div>
  );
};

export default BoardView;
