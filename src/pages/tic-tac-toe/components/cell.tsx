import { tm } from '@/utils/tw-merge';

type CellProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  onPlay: () => void;
};

function Cell({ children, className = '', onPlay, ...restProps }: CellProps) {
  const handlePlay = () => {
    onPlay?.(); // onPlay가 정의되어 있을 때만 호출
  };

  return (
    <button
      type="button"
      className={tm(
        'cursor-pointer',
        'size-20 border rounded-md',
        'text-2xl font-semibold',
        'border-black/50',
        'hover:border-black hover:bg-slate-100/60',
        className
      )}
      onClick={handlePlay}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Cell;
