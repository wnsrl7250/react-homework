import { tm } from '@/utils/tw-merge';

type CellProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  onPlay: () => void;
};

function Cell({ children, className = '', onPlay, ...restProps }: CellProps) {
  const hasChildren = !!children;

  const handlePlay = () => {
    if (hasChildren) return;
    onPlay?.();
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      aria-disabled={hasChildren}
      className={tm(
        'cursor-pointer',
        'size-16 border rounded-md',
        'text-2xl font-semibold',
        'border-black/50',
        { 'hover:border-black hover:bg-slate-100/60': !hasChildren },
        { 'cursor-not-allowed bg-black/10': hasChildren },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Cell;
