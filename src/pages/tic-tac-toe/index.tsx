import Board from './components/board';
import History from './components/history';

function TicTacToe() {
  return (
    <article className="flex space-x-20 justify-center mt-10 bg-amber-500">
      <h2 className="sr-only">틱택토</h2>
      <Board />
      <History />
    </article>
  );
}

export default TicTacToe;
