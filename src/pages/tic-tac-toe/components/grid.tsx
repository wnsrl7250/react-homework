import Cell from './cell';

function Grid() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-3">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}

export default Grid;
