'use client';

interface Props {
  people: number;
}

function PeopleProgressBar({ people }: Props) {
  return (
    <div className="w-full h-[14px] bg-gray-200 rounded-[12px]">
      <div style={{ width: `${people * 2}%` }} className="h-full bg-blue-400 rounded-[12px]" />
    </div>
  );
}

export default PeopleProgressBar;
