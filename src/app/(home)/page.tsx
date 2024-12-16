import axios from 'axios';
import * as cheerio from 'cheerio';

import HomeProfile from '../components/Home/HomeProfile';

import 'swiper/css';
import GatherSwiper from './components/gather-swiper';
import NewsSwiper from './components/news-swiper';

export const getHtml = async (type: '귀농' | '부동산' | '관광') => {
  const response = await axios.get(
    `https://www.newsjeju.net/news/articleList.html?sc_area=A&view_type=sm&sc_word=${type === '귀농' ? '귀촌' : type}`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
  );
  const html = response.data;
  const $ = cheerio.load(html);

  const titles: string[] = [];
  $('#section-list .titles')
    .slice(0, 5)
    .each((index, element) => {
      titles.push($(element).text());
    });
  const images: string[] = [];
  $('#section-list img')
    .slice(0, 5)
    .each((index, element) => {
      images.push($(element).attr('src') || '');
    });

  const link: string[] = [];
  $('#section-list a')
    .slice(0, 5)
    .each((index, element) => {
      link.push($(element).attr('href') || '');
    });

  const details: string[] = [];
  $('#section-list .lead a')
    .slice(0, 5)
    .each((index, element) => {
      details.push($(element).text().split('\n')[1].replaceAll('\t', '').trim().split('.')[0]);
    });
  return { titles, images, link, details };
};

const HomePage = async () => {
  const { titles, images, link } = await getHtml('귀농');

  return (
    <div>
      <HomeProfile />
      <NewsSwiper titles={titles} images={images} link={link} />
      <GatherSwiper />
    </div>
  );
};

export default HomePage;
