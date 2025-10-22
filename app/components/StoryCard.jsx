'use client';

// next imports
import Image from 'next/image';

// component imports
import Pill from '@/app/components/Pill';
import IconText from '@/app/components/IconText';

// importing icons
import { CiUser } from 'react-icons/ci';
import { CiClock2 } from 'react-icons/ci';

export default function StoryCard({ post, children, className = '' }) {
  const { createdAt, imageUrl, category, title, author } = post;
  const date = new Date(createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className={`w-full h-[390px] relative rounded-md overflow-hidden shadow-lg ${className}`}
    >
      <Pill className='absolute top-2 left-2 z-10 bg-green text-white'>{category}</Pill>
      <Image
        src={imageUrl}
        alt={'temporary'}
        fill
        className='object-cover'
      ></Image>
      <div className='absolute inset-0 bg-black/40'></div>

      <div className='text-left p-4 space-y-3 absolute bottom-0 left-0 z-10 w-full text-white'>
        <h1 className='text-xl font-semibold line-clamp-2'>{title}</h1>

        <IconText
          items={[
            { icon: CiUser, text: author },
            { icon: CiClock2, text: date },
          ]}
        />
      </div>
    </div>
  );
}
