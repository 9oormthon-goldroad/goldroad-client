'use client';
import DefaultButton from '@/app/components/buttons/default-button';
import LoginInput from '@/app/components/Input/login-input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface UserLoginData {
  email: string;
  password: string;
}
const LoginPage = () => {
  const router = useRouter();
  const [userLoginData, setUserLoginData] = useState<UserLoginData>({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member/login`, {
        method: 'POST',
        body: JSON.stringify(userLoginData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        if (typeof window === 'undefined') return;
        localStorage.setItem('refreshToken', data.refreshToken);
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mx-[24px] mt-[48px] flex flex-col gap-[48px]">
        <p className="text-[24px] font-bold text-black">안녕하세요!</p>
        <LoginInput
          label="이메일"
          value={userLoginData.email}
          setValue={setUserLoginData}
          type="email"
        />
        <LoginInput
          label="비밀번호"
          value={userLoginData.password}
          setValue={setUserLoginData}
          type="password"
        />
      </div>
      <div className="fixed bottom-[54px] w-[calc(100%-48px)] desktop:w-[432px] left-[50%] translate-x-[-50%]">
        <DefaultButton
          text="시작하기"
          onClick={handleLogin}
          disabled={!userLoginData.email || !userLoginData.password}
        />
        <Link
          href={'/member/signup'}
          className="text-[18px] font-medium text-text-disabled underline text-center block mt-[18px]"
        >
          회원가입하기
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
