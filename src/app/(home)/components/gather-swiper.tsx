'use client';

import HomeGettering from '@/app/components/Home/HomeGettering';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '../../../../public/icons/icon';

export type MeetingData = {
  activity: string;
  createdDate: string;
  id: number;
  keyword: string;
  lastModifiedDate: string;
  preferredTime: string;
  summary: string;
  title: string;
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
function GatherSwiper() {
  const [meetings, setMeetings] = useState<MeetingData[]>([]);

  useEffect(() => {
    getMeetings().then((data) => {
      setMeetings(data);
    });
  }, []);
  if (!meetings) return;
  return (
    <>
      <Link
        className="font-bold text-[24px] mx-[24px] text-black mb-[24px] flex gap-1 items-center"
        href={'/gathering'}
      >
        모임
        <Icon name="arrow-right" width={24} height={24} />
      </Link>
      <Swiper spaceBetween={18} slidesPerView={1.5} className="!ml-[24px] mb-[58px]">
        {meetings.map((meeting) => (
          <SwiperSlide key={meeting.id} className="!w-[320px]">
            <HomeGettering meeting={meeting} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default GatherSwiper;
