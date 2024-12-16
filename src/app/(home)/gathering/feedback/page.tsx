'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '../../../../../public/icons/icon';

const FeedbackPage = () => {
  const router = useRouter();
  const members = ['승원', '소현', '성환', '수아'];
  return (
    <div>
      <Link href="/" className="flex items-center gap-[14px] cursor-pointer mb-[24px]">
        <Icon name="arrow-back" width={28} height={28} />
        <p className="text-[20px] font-semibold">피드백</p>
      </Link>
      <ul className="flex flex-col gap-[16px] items-center ">
        {members.map((member) => (
          <li
            key={member}
            className="flex items-center gap-[40px] bg-[#FFF3EC] rounded-md overflow-hidden w-full py-[10px] px-[20px]"
          >
            <Icon name={member} width={130} height={130} />
            <div className="">
              <p className="text-[24px] font-semibold">{member}님</p>
              <button
                className="flex items-center gap-[2px]"
                onClick={() => router.push(`/gathering/feedback/detail`)}
              >
                <span className="text-[18px] font-semibold">피드백 하기</span>
                <Icon name="arrow-right" width={20} height={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackPage;
