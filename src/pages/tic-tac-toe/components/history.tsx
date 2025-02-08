import HistoryItem from './history-item';

function History() {
  return (
    <section className="flex flex-col space-y-2 items-center w-40">
      <h3 className="sr-only">게임 히스토리</h3>
      <ol className="flex flex-col space-y-1">
        <HistoryItem />
        <HistoryItem />
      </ol>
    </section>
  );
}

export default History;
