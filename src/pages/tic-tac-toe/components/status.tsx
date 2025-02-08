import { tm } from '@/utils/tw-merge';

interface StatusProps {
  message: string;
  onReGame?: () => void;
}

function Status({ message, onReGame }: StatusProps) {
  const isComplete = !message.includes('NEXT PLAYER');

  return (
    <div className={tm('flex justify-between w-full px-5')}>
      <p>{message}</p>
      {isComplete && (
        <button
          type="button"
          className={tm(
            'cursor-pointer',
            'px-1.5 py-1 border-1 border-slate-900 rounded-sm',
            'text-xs font-semibold',
            'hover:bg-slate-800/10'
          )}
          onClick={onReGame}
        >
          다시 ㄱ?
        </button>
      )}
    </div>
  );
}

export default Status;
