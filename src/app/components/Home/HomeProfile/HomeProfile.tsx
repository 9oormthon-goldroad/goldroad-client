'use client';

import { UserData } from '@/app/member/signup/page';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from '../../../../../public/icons/icon';

const HomeProfile = () => {
  const router = useRouter();
  const [memberInfo, setMemberInfo] = useState<UserData | null>(null);
  const getMemberInfo = async () => {
    try {
      if (typeof window === 'undefined') return;
      const token = localStorage.getItem('refreshToken');
      if (!token) {
        router.push('/member/login');
        return null;
      }
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
    <div className="mx-[24px] p-[28px] bg-[#FFF3EC] rounded-[16px] mt-[40px] mb-[58px] flex gap-[12px] items-center cursor-pointer">
      <Link href="/profile">
        <Image
          src="../../../../icons/profile.svg"
          alt="프로필"
          width={108}
          height={108}
          className="bg-[#F8F8F8] rounded-full"
        />
      </Link>
      <div>
        <p className="font-semibold text-[24px] text-black mb-[4px] mr-[4px]">
          {memberInfo?.nickname}님
        </p>
        <Link href="/profile/goldroad">
          <p className="font-semibold text-[20px] text-black flex items-center">
            내 황금향 <Icon name="arrow-right" width={16} height={16} />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomeProfile;
