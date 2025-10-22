'use client';

// next imports
import Image from 'next/image';

// component imports
import IconText from './IconText';
import Pill from '@/app/components/Pill';

// icon imports
import { CiUser } from 'react-icons/ci';
import { CiClock2 } from 'react-icons/ci';

function TopPostCard({ post }) {
  const { createdAt, title, description: desc, imageUrl } = post;
  return (
    <div className='relative rounded-lg bg-white w-full space-y-3'>
      <Pill className='absolute top-2 left-2 z-10 bg-green text-white'>Travel</Pill>
      <div className='relative w-full h-64 overflow-hidden rounded-lg'>
        <Image src={imageUrl} alt={'temporary'} fill />
      </div>

      <div className='p-3 space-y-3'>
        <h1 className='text-xl text-left font-medium'>{title}</h1>
        <p>{desc}</p>
        <IconText
          items={[
            { icon: CiUser, text: 'Speciabrocoli' },
            { icon: CiClock2, text: '10/10/2026' },
          ]}
        />
      </div>
    </div>
  );
}

export default TopPostCard;
