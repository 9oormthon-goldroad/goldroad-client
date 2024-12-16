import BasicLayout from '@/app/components/BaseLayout';
import Header from '@/app/components/header';

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <BasicLayout>
      <Header />
      {children}
    </BasicLayout>
  );
}
