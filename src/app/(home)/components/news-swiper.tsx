'use client';

import HomeNews from '@/app/components/Home/HomeNews';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '../../../../public/icons/icon';
function NewsSwiper({
  titles,
  images,
  link,
}: {
  titles: string[];
  images: string[];
  link: string[];
}) {
  return (
    <>
      <Link
        href={'/news'}
        className="font-bold text-[24px] mx-[24px] text-black mb-[24px] flex items-center gap-2"
      >
        <span>뉴스레터</span>
        <Icon name="arrow-right" width={24} height={24} />
      </Link>
      <Swiper spaceBetween={18} slidesPerView={1.5} className="!ml-[24px] mb-[58px]">
        {titles.map((title, index) => (
          <SwiperSlide key={index}>
            <HomeNews title={title} image={images[index]} type="귀농" link={link[index]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default NewsSwiper;
