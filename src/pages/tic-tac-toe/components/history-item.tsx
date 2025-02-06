import { tm } from '@/utils/tw-merge';

function HistoryItem() {
  return (
    <li>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'flex place-items-center px-2.5 py-1.5',
          'rounded-md',
          'bg-slate-50 text-white',
          'text-xs',
          'hover:bg-black'
        )}
      >
        HistoryItem
      </button>
    </li>
  );
}

export default HistoryItem;
