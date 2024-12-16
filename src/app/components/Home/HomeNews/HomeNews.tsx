import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  image: string;
  type: string;
  link: string;
}
const HomeNews = ({ title, image, type, link }: Props) => {
  return (
    <Link href={'https://www.newsjeju.net/' + link} className="flex flex-col gap-2">
      <div className="w-[300px] h-[200px] relative">
        <Image
          src={image}
          alt="뉴스이미지"
          fill
          className="bg-[#EDEDED] rounded-[16px] mb-[18px] cursor-pointer"
        />
      </div>
      <div className="w-fit px-[12px] py-[4px] bg-[#F6F6F6] rounded-[16px] font-medium text-[12px] text-black">
        {type}
      </div>
      <p className="font-bold text-black text-[18px]">{title}</p>
      <p className="font-medium text-[12px] text-[#666666]">2024.12.20</p>
    </Link>
  );
};

export default HomeNews;
