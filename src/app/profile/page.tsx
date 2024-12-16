'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../../../public/icons/icon';
import { UserData } from '../member/signup/page';
import Feedback from './components/feedback';
import Gether from './components/gether';

function ProfilePage() {
  const router = useRouter();
  const [memberInfo, setMemberInfo] = useState<UserData | null>(null);
  const tabList = ['내 모임', '피드백'];
  const [selected, setSelected] = useState(0);

  const getMemberInfo = async () => {
    try {
      if (typeof window === 'undefined') return;
      const token = localStorage.getItem('refreshToken');
      console.log(token);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member`, {
        method: 'GET',
        headers: {
          'access-token': token || '',
          'refresh-token': token || '',
        },
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMemberInfo().then((data) => {
      setMemberInfo(data);
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[12px] py-12">
        <Icon name="profile" width={130} height={140} />
        <button onClick={() => router.push('/profile/goldroad')}>
          <p className="text-[24px] font-bold flex items-center gap-[8px]">
            {memberInfo?.nickname} 님
            <Icon name="arrow-right" width={20} height={20} />
          </p>
        </button>
      </div>
      <ul className="flex items-center justify-center w-full">
        {tabList.map((tab, index) => (
          <li
            key={tab}
            className={twMerge(
              'w-1/2 flex items-center justify-center text-text-03 border-b-2',
              selected === index && ' text-primary border-primary border-b-2',
            )}
          >
            <button onClick={() => setSelected(index)} className="w-full h-full">
              {tab}
            </button>
          </li>
        ))}
      </ul>
      {selected === 0 && <Gether />}
      {selected === 1 && <Feedback />}
    </div>
  );
}

export default ProfilePage;
