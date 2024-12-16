import BasicLayout from '../components/BaseLayout';
import Header from '../components/header';

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <BasicLayout>
      <Header />
      {children}
    </BasicLayout>
  );
}

export default ProfileLayout;
