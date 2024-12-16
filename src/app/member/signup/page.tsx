'use client';
import DefaultButton from '@/app/components/buttons/default-button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Icon from '../../../../public/icons/icon';
import Signup from './_survey/survey-section/sighup';
import SurveySection from './_survey/survey-section/survey-section';
import ButtonLayout from './components/layout/button-layout';
import InputLayout from './components/layout/input-layout';

export interface UserData {
  email: string;
  password: string;
  nickname: string;
  genderType: string;
  age: string;
  familyComposition: string;
  preferredTime: string;
  preferredPeople: string;
  interest: string;
}

const SignUpPage = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
    nickname: '',
    genderType: '남성',
    age: '40대 이하',
    familyComposition: '부부',
    preferredTime: '평일 오전',
    preferredPeople: '2',
    interest: '',
  });

  const handleNext = async () => {
    if (page === 6) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member/sign-up`, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          if (typeof window === 'undefined') return;
          localStorage.setItem('refreshToken', data['refreshToken']);
          localStorage.setItem('accessToken', data['accessToken']);

          const res = await fetch(`${data.url}`, {
            method: 'POST',
            body: JSON.stringify({
              model: data.model,
              response_format: { type: 'json_object' },
              temperature: Number(data.temperature),
              messages: [
                {
                  role: 'user',
                  content: data.prompt,
                },
              ],
            }),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${data.gptKey}`,
            },
          });
          const gptData: string = await res.text();
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member/gpt`, {
            method: 'POST',
            body: JSON.stringify({
              result: gptData,
              interest: data.interest,
              preferredTime: data.preferredTime,
            }),
            headers: {
              'Content-Type': 'application/json',
              'refresh-token': data.refreshToken,
              'access-token': data.accessToken,
            },
          });
          setIsSuccess(true);
        }
      } catch (error) {
        console.error(error);
      }
      return;
    }
    setPage(page + 1);
  };

  if (isSuccess) {
    return (
      <div className="px-[24px]">
        <InputLayout>
          <div className="flex flex-col items-center justify-center gap-[12px] h-[500px]">
            <Icon name={'clap'} width={130} height={140} />
            <div className="text-[24px] font-bold flex items-center flex-col">
              <p>회원 가입을 완료했어요!</p>
              <p>즐거운 황혼 모임을 찾으러 가요</p>
            </div>
          </div>
        </InputLayout>
        <ButtonLayout>
          <DefaultButton text="확인" onClick={() => router.push('/gathering')} />
        </ButtonLayout>
      </div>
    );
  }
  return (
    <div className="px-[24px]">
      <button onClick={() => page > 0 && setPage(page - 1)}>
        <Icon name="arrow-back" width={30} height={30} />
      </button>
      {page === 0 && (
        <Signup handleNext={handleNext} userData={userData} setUserData={setUserData} />
      )}
      {page >= 1 && (
        <SurveySection
          page={page}
          handleNext={handleNext}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </div>
  );
};

export default SignUpPage;
