'use client';
import { UserData } from '@/app/member/signup/page';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MeetingData } from '../components/gather-swiper';
import GatherModal from './gather-modal';

const iconsList = [
  {
    id: 1,
    name: '관광',
    imagePath: '../../../../icons/gathering1.svg',
  },
  {
    id: 2,
    name: '귀농',
    imagePath: '../../../../icons/gathering2.svg',
  },
  {
    id: 3,
    name: '자연환경',
    imagePath: '../../../../icons/gathering3.svg',
  },
  {
    id: 4,
    name: '문화생활',
    imagePath: '../../../../icons/gathering4.svg',
  },
  {
    id: 5,
    name: '휴식',
    imagePath: '../../../../icons/gathering5.svg',
  },
  {
    id: 6,
    name: '은퇴마을',
    imagePath: '../../../../icons/gathering6.svg',
  },
];

const GatheringPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetingId, setMeetingId] = useState(0);
  const [memberInfo, setMemberInfo] = useState<UserData | null>(null);
  const [meetings, setMeetings] = useState<MeetingData[]>([]);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const getMeetings = async () => {
    try {
      if (typeof window === 'undefined') return;
      const token = localStorage.getItem('refreshToken');
      console.log(token, 'token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meeting`, {
        method: 'GET',
        headers: { 'refresh-token': `${token}`, 'access-token': `${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMemberInfo = async () => {
    try {
      if (typeof window === 'undefined') return;
      const token = localStorage.getItem('refreshToken');

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
    getMeetings().then((data) => {
      setMeetings(data);
      getMemberInfo().then((data) => {
        setMemberInfo(data);
      });
    });
  }, []);
  if (isModalOpen) {
    return (
      <GatherModal
        handleModalClose={handleModalClose}
        meeting={meetings.find((meeting) => meeting.id === meetingId) as MeetingData}
      />
    );
  }
  // datas에 실제 api를 불러오시면 됩니다!

  const onClickDetail = (id: number) => {
    // 모달띄우기
    setMeetingId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="mx-[24px]">
        <p className="text-[24px] mt-[38px] mb-[24px] font-bold">{`${memberInfo?.nickname}님만을 위한 모임이에요!`}</p>
        <div className="flex flex-col gap-[18px] mb-[58px]">
          {meetings?.map((data) => (
            <div
              key={data.id}
              className="border-[1px] border-solid border-[#C4C4C6] rounded-[8px] p-[20px] flex-col flex gap-[40px] cursor-pointer"
            >
              <div className="flex gap-[12px]">
                <div className="w-[128px] h-[128px] relative flex-shrink-0">
                  <Image
                    src={iconsList[0].imagePath}
                    alt={iconsList[0].name}
                    width={128}
                    height={128}
                    className="bg-[#EDEDED] rounded-[12px] absolute top-0 left-0"
                  />
                  {iconsList.map((icon) => {
                    const { keyword } = data;
                    if (keyword && keyword.includes(icon.name)) {
                      return (
                        <Image
                          key={icon.name}
                          src={icon.imagePath}
                          alt={icon.name}
                          width={128}
                          height={128}
                          className="bg-[#EDEDED] rounded-[12px] absolute top-0 left-0"
                        />
                      );
                    }
                  })}
                </div>
                <div className="flex flex-col">
                  <p className="w-fit bg-[#D7F0EA] mb-[4px] text-[#0A614D] text-[12px] font-semibold px-[10px] py-[4px] rounded-[16px]">
                    인기
                  </p>
                  <p className="font-semibold text-[20px] mb-[8px] text-black">{data.title}</p>
                  <div className="flex flex-wrap gap-[8px] mb-[12px]">
                    {data.keyword && (
                      <p className="font-semibold text-[#666666] text-[18px]"># {data.keyword}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <div className="avatar-group -space-x-2 rtl:space-x-reverse">
                      <div className="avatar">
                        <div className="w-6">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-6">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-6">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-6">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-[#D9D9D9] text-extrabold text-[#fff] w-6">
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#666666] text-[14px]">
                      <b className="font-semibold text-[18px]">8</b> /12
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[12px]">
                <button
                  onClick={() => onClickDetail(data.id)}
                  className="h-[48px] bg-[#EBEBEC] w-full rounded-[8px] font-semibold text-black text-[18px]"
                >
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GatheringPage;
