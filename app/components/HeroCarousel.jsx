'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        <div className='embla__slide rounded-2xl bg-black text-white text-center content-center'>
          Project Under Maintainance
        </div>
        <div className='embla__slide rounded-2xl bg-black text-white text-center content-center'>
          Project Under Maintainance
        </div>
        <div className='embla__slide rounded-2xl bg-black text-white text-center content-center'>
          Project Under Maintainance
        </div>
      </div>
    </div>
  );
}
