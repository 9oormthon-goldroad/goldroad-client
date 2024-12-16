import { getHtml } from '../(home)/page';
import TabPage from './components/tab-page';

async function NewsPage() {
  const {
    titles: titles1,
    images: images1,
    link: link1,
    details: details1,
  } = await getHtml('귀농');
  const {
    titles: titles2,
    images: images2,
    link: link2,
    details: details2,
  } = await getHtml('부동산');
  const {
    titles: titles3,
    images: images3,
    link: link3,
    details: details3,
  } = await getHtml('관광');

  const news = [
    { title: titles1, image: images1, link: link1, details: details1 },
    { title: titles2, image: images2, link: link2, details: details2 },
    { title: titles3, image: images3, link: link3, details: details3 },
  ];
  return (
    <div>
      <TabPage news={news} />
    </div>
  );
}

export default NewsPage;
