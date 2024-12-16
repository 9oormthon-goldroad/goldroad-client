interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-secondary h-[14px] rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-[8px]" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;
