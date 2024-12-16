interface Props {
  choice: string;
  isSelected: boolean;
  index: number;
  handleSelect: (index: number) => void;
}

function ChoiceCard({ choice, isSelected, index, handleSelect }: Props) {
  const selectedStyle = isSelected ? 'bg-primary text-white' : 'bg-gray-200';
  return (
    <button
      className={`w-[209px] h-[82px] rounded-[12px] flex items-center justify-center ${selectedStyle}`}
      onClick={() => handleSelect(index)}
    >
      {choice}
    </button>
  );
}

export default ChoiceCard;
