'use client';

import { twMerge } from 'tailwind-merge';

interface DefaultButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'default' | 'gray';
}

function DefaultButton({ text, onClick, disabled = false, type = 'default' }: DefaultButtonProps) {
  const disabledStyle = disabled ? 'bg-text-disabled' : 'bg-primary';
  return (
    <button
      className={twMerge(
        'w-full h-[50px] font-semibold rounded-[8px] text-white',
        type === 'default' ? 'bg-primary text-white' : 'bg-[#F8F9FB] text-black',
        disabledStyle,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
