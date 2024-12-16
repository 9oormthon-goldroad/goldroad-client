import Image from 'next/image';
import Icon from '../../../../public/icons/icon';
import Link from 'next/link';

function Feedback() {
  return (
    <>
      <div className="mt-[34px] mb-[78px]">
        <p className="font-semibold text-[18px] text-black">내가 받은 피드백</p>
        <p className="font-medium text-[16px] text-[#666666] mb-[24px]">
          모임에 참여하고 뱃지를 획득해보세요!
        </p>
        <div className="flex gap-[16px] mb-[38px]">
          <div>
            <div className="w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center">
              <Icon name="water" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">물+4</p>
            <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
          </div>
          <div>
            <div className="w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center">
              <Icon name="sun" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">햇빛+4</p>
            <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
          </div>
          <div>
            <div className="w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center">
              <Icon name="soy" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">거름+4</p>
            <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
          </div>
        </div>
      </div>
      <Link href={'/profile/goldroad'}>
        <Image
          src="../../../icons/goldorange.svg"
          alt="보러가기"
          width={300}
          height={100}
          className="cursor-pointer"
        />
      </Link>
    </>
  );
}

export default Feedback;
