import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      screens: {
        desktop: '480px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#F6843E',
        secondary: '#FFF3EC',
        black: '#111111',
        white: '#EEEEEE',
        gray: '#F8F9FB',
        'light-gray': '#E9EBED',
        text: {
          '01': '#111111',
          '02': '#404040',
          '03': '#666666',
          disabled: '#ACACAC',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F6843E',
          secondary: '#DFB955',
          accent: '#607d8b',
          neutral: '#2a2e37',
          'base-100': '#ffffff',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#fb8c00',
          error: '#f44336',
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
