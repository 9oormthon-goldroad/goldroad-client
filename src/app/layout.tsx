import localFont from 'next/font/local';
import React from 'react';
import './globals.css';
import ReactQueryProvider from './providers/ReactQueryProvider';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

// const metadata: Metadata = {
//   title: '황금향',
//   description:
//     '황금향은 은퇴 후 제주도 이주를 꿈꾸는 분들을 위한 종합 플랫폼입니다. 부동산, 관광, 귀농 정보부터 자동 모임 생성 기능까지, 제주 정착에 필요한 모든 것을 제공합니다.',
//   keywords:
//     '제주도 이주, 은퇴 후 제주, 제주 정착, 제주 부동산, 제주 관광, 제주 귀농, 제주 커뮤니티, 황금향, 제주 생활 정보', // 키워드 추가
//   icons: {
//     icon: '/icon.ico', // Favicon 경로 설정
//   },
//   openGraph: {
//     title: '황금향',
//     description:
//       '황금향은 은퇴 후 제주도 이주를 꿈꾸는 분들을 위한 종합 플랫폼입니다. 부동산, 관광, 귀농 정보부터 자동 모임 생성 기능까지, 제주 정착에 필요한 모든 것을 제공합니다.',
//     url: 'https://k836f1a604135a.user-app.krampoline.com',
//     images: [
//       {
//         url: '/og-image.png', // Open Graph 이미지 경로
//         width: 800,
//         height: 600,
//         alt: '황금향이미지',
//       },
//     ],
//   },
//   // twitter: {
//   //   // 트위터 카드 설정
//   //   card: 'summary_large_image',
//   //   title: '황금향',
//   //   description:
//   //     '황금향은 은퇴 후 제주도 이주를 꿈꾸는 분들을 위한 종합 플랫폼입니다. 부동산, 관광, 귀농 정보부터 자동 모임 생성 기능까지, 제주 정착에 필요한 모든 것을 제공합니다.',
//   //   images: ['/og-image.png'],
//   // },
//   other: {
//     keywords:
//       '제주도 이주, 은퇴 후 제주, 제주 정착, 제주 부동산, 제주 관광, 제주 귀농, 제주 커뮤니티, 황금향, 제주 생활 정보',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard antialiased w-full `}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
