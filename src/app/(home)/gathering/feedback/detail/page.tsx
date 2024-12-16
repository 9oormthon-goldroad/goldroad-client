'use client';
import DefaultButton from '@/app/components/buttons/default-button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../../../../../../public/icons/icon';

function FeedbackDetailPage() {
  const router = useRouter();
  const [selectedBlue, setSelectedBlue] = useState<null | number>(null);
  const [selectedRed, setSelectedRed] = useState<null | number>(null);
  return (
    <div>
      <Link href="/" className="flex items-center gap-[14px] cursor-pointer mb-[24px]">
        <Icon name="arrow-back" width={28} height={28} />
        <p className="text-[20px] font-semibold">피드백</p>
      </Link>
      <div className="flex flex-col items-center justify-center gap-[12px] py-12">
        <Icon name="승원" width={130} height={140} />
        <div>
          <p className="text-[24px] font-bold flex items-center gap-[8px]">승원 님</p>
        </div>
      </div>
      <div>
        <p className="font-medium text-[20px] mb-[24px]">칭찬해요!</p>
        <div className="flex gap-[16px] mb-[38px]">
          <button onClick={() => setSelectedBlue(0)}>
            <div
              className={twMerge(
                'w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center',
                selectedBlue === 0 && 'bg-[#5D91F9] border-[#2D66D9] border-[2px]',
              )}
            >
              <Icon name="water" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">물+4</p>
            <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
          </button>
          <button onClick={() => setSelectedBlue(1)}>
            <div
              className={twMerge(
                'w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center',
                selectedBlue === 1 && 'bg-[#5D91F9] border-[#2D66D9] border-[2px]',
              )}
            >
              <Icon name="sun" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">햇빛+4</p>
            <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
          </button>
          <button onClick={() => setSelectedBlue(2)}>
            <div
              className={twMerge(
                'w-[134px] h-[134px] rounded-full bg-[#EEF4FF] mb-[8px] flex justify-center items-center',
                selectedBlue === 2 && 'bg-[#5D91F9] border-[#2D66D9] border-[2px]',
              )}
            >
              <Icon name="soy" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">거름+4</p>
            <p className="text-[16px] font-medium text-[#3755CF] text-center">활발해요!</p>
          </button>
        </div>
      </div>
      <div>
        <p className="font-medium text-[20px] mb-[24px]">노력해요!</p>
        <div className="flex gap-[16px] mb-[38px]">
          <button onClick={() => setSelectedRed(0)}>
            <div
              className={twMerge(
                'w-[134px] h-[134px] rounded-full bg-[#FFEEEE] mb-[8px] flex justify-center items-center',
                selectedRed === 0 && 'bg-[#FD7474] border-[#DC3636] border-[2px]',
              )}
            >
              <Icon name="water" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">물+4</p>
            <p className="text-[16px] font-medium text-[#E92626] text-center">참여도를 높여요!</p>
          </button>
          <button onClick={() => setSelectedRed(1)}>
            <div
              className={twMerge(
                'w-[134px] h-[134px] rounded-full bg-[#FFEEEE] mb-[8px] flex justify-center items-center',
                selectedRed === 1 && 'bg-[#FD7474] border-[#DC3636] border-[2px]',
              )}
            >
              <Icon name="sun" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">햇빛+4</p>
            <p className="text-[16px] font-medium text-[#E92626] text-center">경청해봐요!</p>
          </button>
          <button onClick={() => setSelectedRed(2)}>
            <div
              className={twMerge(
                'w-[134px] h-[134px] rounded-full bg-[#FFEEEE] mb-[8px] flex justify-center items-center',
                selectedRed === 2 && 'bg-[#FD7474] border-[#DC3636] border-[2px]',
              )}
            >
              <Icon name="soy" width={58} height={58} />
            </div>
            <p className="text-[18px] font-medium text-[#666666] text-center">거름+4</p>
            <p className="text-[16px] font-medium text-[#E92626] text-center">도움을 줘봐요!</p>
          </button>
        </div>
        <DefaultButton text={'피드백 제출하기'} onClick={() => router.push('/')} />
      </div>
    </div>
  );
}

export default FeedbackDetailPage;
