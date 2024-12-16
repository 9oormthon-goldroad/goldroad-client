'use client';
import DefaultButton from '@/app/components/buttons/default-button';
import ButtonLayout from '@/app/member/signup/components/layout/button-layout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '../../../../public/icons/icon';
import { MeetingData } from '../components/gather-swiper';
interface GatherModalProps {
  handleModalClose: () => void;
  meeting: MeetingData;
}
const GatherModal = ({ handleModalClose, meeting }: GatherModalProps) => {
  const router = useRouter();
  if (!meeting) return;

  return (
    <>
      <div className="mx-[24px]">
        <p className="mt-[20px] text-[24px] font-bold text-black mb-[8px] flex justify-between">
          <span className="text-[#0A614D]">{meeting.title}</span>
          <button onClick={handleModalClose}>
            <Icon name="x" width={22} height={22} />
          </button>
        </p>
        <div className="flex flex-wrap gap-[12px] mb-[18px]">
          {meeting.keyword.split(',').map((keyword) => (
            <p className="font-semibold text-[#666666] text-[18px]" key={keyword}>
              # {keyword}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-[8px]">
          <Icon name={'calendar'} width={20} height={20} />
          <p className="text-[#666666] font-medium text-[18px]">
            {meeting.createdDate.split('T')[0]}
          </p>
        </div>
        <Link
          href={'https://us04web.zoom.us/j/72829361511?pwd=c2V5blPBMS1xxarL8ZUZbLEErOoDaK.1'}
          className="flex items-center gap-[8px]"
          target="_blank"
        >
          <Icon name={'link'} width={20} height={20} />
          <p className="text-blue-400 font-medium text-[18px] underline ">link</p>
        </Link>
        <p className="text-[#666666] font-medium text-[18px] mb-[24px]">{meeting.summary}</p>
        <div className="flex justify-between w-full items-center">
          <button
            className="flex items-center gap-[12px]"
            onClick={() => router.push('/gathering/feedback')}
          >
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
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Icon name={'AI'} width={400} height={500} />
      </div>

      <ButtonLayout>
        <DefaultButton text="확인" onClick={() => router.push('/')} />
      </ButtonLayout>
    </>
  );
};

export default GatherModal;
