'use client';
import Link from 'next/link';
import Icon from '../../../public/icons/icon';
import useToggle from '@/lib/hooks/useToggle';

function Header() {
  const [isOpenNav, toggleOpenNav] = useToggle();
  return (
    <header className="w-full h-[52px]">
      <div className="flex justify-between items-center w-full h-full px-[24px] font-bold text-[26px]">
        <Link href={'/'}>
          <Icon name="logo" width={71} height={28} />
        </Link>
        <div className="cursor-pointer" onClick={toggleOpenNav}>
          <Icon name={isOpenNav ? 'close' : 'menu'} width={18} height={16} />
        </div>
      </div>
      {isOpenNav && (
        <div className="fixed desktop:w-[480px] w-full">
          <Link
            href={'/news'}
            className="block font-bold text-[24px] text-black bg-[#ffffff] py-[18px] px-[24px]"
          >
            뉴스레터
          </Link>
          <Link
            href={'/gathering'}
            className="block font-bold text-[24px] text-black bg-[#ffffff] py-[18px] px-[24px]"
          >
            모임
          </Link>
          <Link
            href={'/profile'}
            className="block font-bold text-[24px] text-black bg-[#ffffff] py-[18px] px-[24px]"
          >
            내 정보
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
