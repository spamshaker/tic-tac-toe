import React from 'react';
import {DRAWING_MAP} from '@ria-develop/tic-tac-toe-core/src/tic-tac-toe-core';

type BoardViewOverlayProps = {
  data: Readonly<number[]> | null;
};

const BoardViewOverlay = (props: BoardViewOverlayProps): JSX.Element | null => {
  const {data} = props;
  const [x1, y1, x2, y2] = data ? DRAWING_MAP.get(data) || [] : [];
  return (
    <svg className="overlay">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="8" />
    </svg>
  );
};

export default BoardViewOverlay;
