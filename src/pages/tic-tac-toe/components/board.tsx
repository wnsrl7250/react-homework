import Grid from './grid';
import Status from './status';

function Board() {
  return (
    <section className="flex flex-col space-y-2 items-center w-60">
      <h3 className="sr-only">게임 보드</h3>
      <Status />
      <Grid />
    </section>
  );
}

export default Board;
