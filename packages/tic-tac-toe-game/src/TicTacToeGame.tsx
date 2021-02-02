import React from 'react';
import {BoardView} from '@ria-develop/tic-tac-toe-components/src/tic-tac-toe-components';
import {lazy} from '@ria-develop/tic-tac-toe-ai/src/tic-tac-toe-ai';
import engine from '@ria-develop/tic-tac-toe-engine/src/tic-tac-toe-engine';

const TicTacToeGame = (): JSX.Element => (
  <div>
    <BoardView engine={engine} ai={lazy} />
    {/*<button>reset</button>*/}
  </div>
);

export default TicTacToeGame;
