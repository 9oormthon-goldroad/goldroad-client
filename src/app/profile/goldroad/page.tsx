'use client';
import useToggle from '@/lib/hooks/useToggle';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from '../../../../public/icons/icon';

interface MemberInfo {
  nickname: string;
  email: string;
  password: string;
  genderType: string;
  age: string;
  familyComposition: string;
  preferredTime: string;
  preferredPeople: string;
  interest: string;
  feedbackWater: number;
  feedbackSun: number;
  feedbackManure: number;
  attendCount: number;
  levelCount: number;
}

function GoldroadPage() {
  const [isOpenGrade, toggleOpenGrade] = useToggle(true);
  const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null);

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

  // 실제 data 요청 할 값입니다!
  const data = {
    count: memberInfo?.attendCount || 0,
    levelCount: memberInfo?.levelCount || 0,
    water: memberInfo?.feedbackWater || 0,
    sun: memberInfo?.feedbackSun || 0,
    soy: memberInfo?.feedbackManure || 0,
  };

  // 등급정하기
  const [gradeInfo, setGradeInfo] = useState<{
    gradeName: string;
    gradeImagePath: string;
    gradeProgress: string;
    gradeProgressOrange: string;
  }>({
    gradeName: '',
    gradeImagePath: '',
    gradeProgress: '',
    gradeProgressOrange: '',
  });

  const updateGrade = () => {
    switch (true) {
      case data.count >= 200 && data.levelCount >= 600:
        setGradeInfo({
          gradeName: '황금향',
          gradeImagePath: '/icons/grade9.svg',
          gradeProgress: '100',
          gradeProgressOrange: '94',
        });
        break;
      case data.count >= 100 && data.levelCount >= 300:
        setGradeInfo({
          gradeName: '나무',
          gradeImagePath: '/icons/grade8.svg',
          gradeProgress: '80',
          gradeProgressOrange: '74',
        });
        break;
      case data.count >= 80 && data.levelCount >= 250:
        setGradeInfo({
          gradeName: '열매',
          gradeImagePath: '/icons/grade7.svg',
          gradeProgress: '70',
          gradeProgressOrange: '65',
        });
        break;
      case data.count >= 50 && data.levelCount >= 150:
        setGradeInfo({
          gradeName: '꽃',
          gradeImagePath: '/icons/grade6.svg',
          gradeProgress: '60',
          gradeProgressOrange: '54',
        });
        break;
      case data.count >= 30 && data.levelCount >= 100:
        setGradeInfo({
          gradeName: '가지',
          gradeImagePath: '/icons/grade5.svg',
          gradeProgress: '50',
          gradeProgressOrange: '45',
        });
        break;
      case data.count >= 20 && data.levelCount >= 50:
        setGradeInfo({
          gradeName: '잎새',
          gradeImagePath: '/icons/grade4.svg',
          gradeProgress: '40',
          gradeProgressOrange: '35',
        });
        break;
      case data.count >= 10 && data.levelCount >= 20:
        setGradeInfo({
          gradeName: '묘목',
          gradeImagePath: '/icons/grade3.svg',
          gradeProgress: '30',
          gradeProgressOrange: '24',
        });
        break;
      case data.count >= 5 && data.levelCount >= 10:
        setGradeInfo({
          gradeName: '새싹',
          gradeImagePath: '/icons/grade2.svg',
          gradeProgress: '20',
          gradeProgressOrange: '13',
        });
        break;
      default:
        setGradeInfo({
          gradeName: '씨앗',
          gradeImagePath: '/icons/grade1.svg',
          gradeProgress: '10',
          gradeProgressOrange: '5',
        });
    }
  };

  useEffect(() => {
    updateGrade();
  }, []);

  console.log(gradeInfo);

  if (!data) return;

  return (
    <div className="mx-[24px]">
      {/* 상단바 */}
      <Link href="/" className="flex items-center gap-[14px] cursor-pointer mb-[24px]">
        <Icon name="arrow-back" width={28} height={28} />
        <p className="text-[20px] font-semibold">내 황금향 키우기</p>
      </Link>
      {/* 이미지 */}
      <div className="w-full h-[296px] relative rounded-[16px] bg-gray mb-[28px] overflow-hidden">
        <Image src={gradeInfo.gradeImagePath} alt="황금향이미지" fill objectFit="cover" />
      </div>
      {/* progress bar */}
      <div className="relative min-w-full mb-[70px]">
        <progress
          className={`progress bg-[#FFF3EC] w-full h-[14px] ${gradeInfo.gradeProgress === '100' ? 'progress-secondary' : 'progress-primary'}`}
          value={gradeInfo.gradeProgress}
          max="100"
        ></progress>
        <div
          className={`top-[50%] translate-y-[-60%] absolute`}
          style={{ left: `${gradeInfo.gradeProgressOrange}%` }}
        >
          <Icon
            name={gradeInfo.gradeProgress === '100' ? 'orangegold' : 'orange'}
            width={38}
            height={45}
          />
          <p className="absolute bottom-[-50%] text-[18px] whitespace-nowrap font-medium">
            {gradeInfo.gradeName}
          </p>
        </div>
      </div>
      {/* 피드백 */}
      <p className="font-semibold text-[18px] text-black">내가 받은 피드백</p>
      <p className="font-medium text-[16px] text-[#666666] mb-[24px]">
        모임에 참여하고 뱃지를 획득해보세요!
      </p>
      <div className="flex gap-[16px] mb-[38px]">
        <div>
          <div
            className={`w-[134px] h-[134px] rounded-full mb-[8px] flex justify-center items-center ${data.water > 0 ? 'bg-[#EEF4FF]' : 'bg-[#FFEEEE]'}`}
          >
            <Icon name="water" width={58} height={58} />
          </div>
          <p className="text-[18px] font-medium text-[#666666] text-center">
            물{data.water > 0 ? `+${data.water}` : `${data.water}`}
          </p>
          <p
            className={`text-[16px] font-medium text-center ${data.water > 0 ? 'text-[#3755CF]' : 'text-[#E92626]'}`}
          >
            {data.water > 0 ? '활발해요!' : '참여도를 높여요!'}
          </p>
        </div>
        <div>
          <div
            className={`w-[134px] h-[134px] rounded-full mb-[8px] flex justify-center items-center ${data.sun > 0 ? 'bg-[#EEF4FF]' : 'bg-[#FFEEEE]'}`}
          >
            <Icon name="sun" width={58} height={58} />
          </div>
          <p className="text-[18px] font-medium text-[#666666] text-center">
            햇빛{data.sun > 0 ? `+${data.sun}` : `${data.sun}`}
          </p>
          <p
            className={`text-[16px] font-medium text-center ${data.sun > 0 ? 'text-[#3755CF]' : 'text-[#E92626]'}`}
          >
            {data.sun ? '친절해요!' : '경청해봐요!'}
          </p>
        </div>
        <div>
          <div
            className={`w-[134px] h-[134px] rounded-full mb-[8px] flex justify-center items-center ${data.soy > 0 ? 'bg-[#EEF4FF]' : 'bg-[#FFEEEE]'}`}
          >
            <Icon name="soy" width={58} height={58} />
          </div>
          <p className="text-[18px] font-medium text-[#666666] text-center">
            거름{data.soy > 0 ? `+${data.soy}` : `${data.soy}`}
          </p>
          <p
            className={`text-[16px] font-medium text-center ${data.soy > 0 ? 'text-[#3755CF]' : 'text-[#E92626]'}`}
          >
            {data.soy ? '도음이 됐어요!' : '도움을 줘봐요!'}
          </p>
        </div>
      </div>
      {/* 황금향등급 */}
      <div className="mb-[48px]">
        <div className="flex justify-between mt-[10px] mb-[24px] items-center">
          <p className="font-bold text-[18px]">황금향등급</p>
          <div className="cursor-pointer" onClick={toggleOpenGrade}>
            <Icon name={isOpenGrade ? `dropup` : `dropdown`} width={24} height={24} />
          </div>
        </div>
        {isOpenGrade && (
          <div>
            <p>·씨앗: 호기심 많은 제주 관심자</p>
            <p>·새싹: 정보를 모으는 제주 탐색자 (모임 5회 이상, 재료 10개 이상)</p>
            <p>·묘목: 첫발을 내딛은 제주 방문자 (모임 10회 이상, 재료 20개 이상)</p>
            <p>·잎새: 경험을 쌒는 제주 여행자 (모임 20회 이상, 재료 50개 이상)</p>
            <p>·가지: 얘기를 전하는 제주 소개자 (모임 30회 이상, 재료 100개 이상)</p>
            <p>·꽃: 길잡이가 되는 제주 가이드 (모임 50회 이상, 재료 150개 이상)</p>
            <p>·열매: 모험을 즐기는 제주 탐험가 (모임 80회 이상, 재료 250개 이상)</p>
            <p>·나무: 뿌리를 내린 제주 정착자 (모임 100회 이상, 재료 300개 이상)</p>
            <p>·황금향: 전설이 된 제주 토박이 (모임 200회 이상, 재료 600개 이상)</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoldroadPage;
