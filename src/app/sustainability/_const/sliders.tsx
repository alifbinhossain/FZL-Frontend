import { ISlide } from '@/types';

const sliders: ISlide[] = [
  {
    image: '/images/sliders/slide-2.jpg',
    content: (
      <div className='size-full flex justify-end items-center p-32'>
        <h2 className='text-3xl max-w-[400px] text-white font-thin'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            <span className='font-bold'>lorem</span>
            <br />
            <span className='font-thin uppercase'>Lorem, ipsum.</span>
          </h1>
          <p className='mt-8 max-w-[800px] text-muted-foreground'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sunt
            obcaecati tempore laboriosam nihil quae reiciendis aperiam quis
            recusandae, optio aspernatur fuga, beatae voluptatibus provident
            pariatur placeat consequatur quasi rerum.
            <br />
            <br />
            <span className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium consequuntur quibusdam voluptate maiores voluptatum
              minima error nam, quia quo soluta.
            </span>
          </p>
        </div>
      </div>
    ),
  },
];

export default sliders;
