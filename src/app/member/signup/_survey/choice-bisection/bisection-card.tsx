import { twMerge } from 'tailwind-merge';
import Icon from '../../../../../../public/icons/icon';
interface BisectionCardProps {
  iconName: string;
  text: string;
  isChoosed: boolean;
  onClick: (text: string) => void;
}

function BisectionCard({ iconName, text, isChoosed, onClick }: BisectionCardProps) {
  const bgColor = isChoosed ? 'bg-primary' : 'bg-gray';
  const textColor = isChoosed ? 'text-white' : 'text-[#ACACAC]';
  return (
    <button
      className={twMerge(`w-[209px] h-[212px] rounded-[12px] overflow-hidden`)}
      onClick={() => onClick(text)}
    >
      <div
        className={twMerge(
          'w-full h-full bg-white flex flex-col justify-center items-center',
          bgColor,
          textColor,
        )}
      >
        <Icon name={iconName} width={52} height={52} color={isChoosed ? '#FFFFFF' : '#ACACAC'} />
        <div>{text}이예요</div>
      </div>
    </button>
  );
}

export default BisectionCard;
