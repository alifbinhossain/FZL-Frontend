import { ISlide } from '@/types';

const sliders: ISlide[] = [
  {
    image: '/images/sliders/slide-2.jpg',
    content: (
      <div className='size-full flex justify-end items-center p-32'>
        <h2 className='text-3xl max-w-[400px] text-white font-thin'>
          …with the goal of a greener future for today & tomorrow.
        </h2>
      </div>
    ),
  },
  {
    image: '/images/sliders/slide-3.jpg',
    content: (
      <div className='size-full max-w-[1200px] mx-auto flex items-center'>
        <div>
          <h1 className='text-4xl text-white'>
            <span className='font-bold'>Our</span>
            <br />
            <span className='font-thin'>KARMIC FOOTPRINTS</span>
          </h1>
          <p className='mt-8 max-w-[800px] text-muted-foreground'>
            The enigmatic force of karma, an invisible cosmic weaver, connects
            our actions to the fabric of our lives and shapes our destinies with
            each choice we make. The three profound laws of Karma encompass
            responsibility, driving change, fostering generosity and recognizing
            the interdependence of all beings.
            <br />
            <br />
            <span className='font-bold'>
              TEX approaches sustainability through the lens of karma, for we
              believe that our actions of today will impact the future of
              tomorrow.
            </span>
          </p>
        </div>
      </div>
    ),
  },
];

export default sliders;
