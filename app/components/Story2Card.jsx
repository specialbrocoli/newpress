'use client';

// lib imports
import { dateFormatter } from '@/lib';

// next imports
import Image from 'next/image';

// icon imports
import { CiClock2 } from 'react-icons/ci';

// component imports
import IconText from '@/app/components/IconText';

export default function Story2Card({ post, className = '' }) {
  const { createdAt, title, imageUrl } = post;
  const date = dateFormatter(createdAt);
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center gap-4 w-full text-left bg-white rounded-md overflow-hidden shadow-md p-4 ${className}`}
    >
      <div className='relative w-full h-40 md:w-24 md:h-24 flex-shrink-0'>
        <Image
          src={imageUrl}
          alt='because its needed'
          fill
          className='object-cover rounded-md'
        ></Image>
      </div>
      <div>
        <h1 className='text-base md:font-medium'>{title}</h1>
        <IconText color='#dc3545' items={[{ icon: CiClock2, text: date }]} />
      </div>
    </div>
  );
}
