import { ISafetyAndRegulation } from '@/types';
import Content1 from '../_components/safety-and-regulation/contents/content-1';
import Content2 from '../_components/safety-and-regulation/contents/content-2';
import Content3 from '../_components/safety-and-regulation/contents/content-3';
import Content4 from '../_components/safety-and-regulation/contents/content-4';
import Content5 from '../_components/safety-and-regulation/contents/content-5';
import Content6 from '../_components/safety-and-regulation/contents/content-6';

const safetyAndRegulationData: ISafetyAndRegulation[] = [
  {
    image: '/images/safety-and-regulation/s_04.jpg',
    content: <Content1 />,
  },
  {
    image: '/images/safety-and-regulation/s_05.jpg',
    content: <Content2 />,
  },
  {
    image: '/images/safety-and-regulation/s_11.jpg',
    content: <Content3 />,
  },
  {
    image: '/images/safety-and-regulation/s_12.jpg',
    content: <Content4 />,
  },
  {
    image: '/images/safety-and-regulation/s_13.jpg',
    content: <Content5 />,
  },
  {
    image: '/images/safety-and-regulation/s_14.jpg',
    content: <Content6 />,
  },
];

export default safetyAndRegulationData;
