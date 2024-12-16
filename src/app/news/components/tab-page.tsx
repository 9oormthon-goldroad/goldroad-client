'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../../../../public/icons/icon';
interface Props {
  news: { title: string[]; image: string[]; link: string[]; details: string[] }[];
}
function TabPage({ news }: Props) {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const tabs = ['귀농', '부동산', '관광'];
  return (
    <div>
      <Link href={'/'} className="flex items-center gap-2 my-[24px] text-[20px]">
        <Icon name="arrow-back" width={24} height={24} />
        <p>뉴스레터</p>
      </Link>
      <div>
        <ul className="flex items-center gap-2">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={twMerge(
                'text-[16px] text-black rounded-3xl overflow-hidden border-[1px] border-[#e9ebed]',
                index === selectedTab ? 'bg-primary border-primary text-white' : '',
              )}
            >
              <button className="px-[16px] py-[8px]" onClick={() => setSelectedTab(index)}>
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-col gap-4 w-full mt-[24px]">
        {news[selectedTab].title.map((subject, index) => (
          <li key={index} className="flex items-center gap-2 w-full">
            <div className="flex flex-col gap-2 w-2/3">
              <h1 className="text-[18px] font-bold">{subject}</h1>
              <p className="text-[16px]">{news[selectedTab].details[index]}</p>
            </div>
            <div className="w-1/3 relative h-[120px] rounded-lg overflow-hidden">
              <Image src={news[selectedTab].image[index]} alt={subject} fill />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabPage;
