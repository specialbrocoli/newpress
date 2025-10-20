// next imports
import Link from 'next/link';
import Image from 'next/image';

// importing icons
import { CiUser } from 'react-icons/ci';
import { CiClock2 } from 'react-icons/ci';

// component imports
import Pill from '@/app/components/Pill';

export default function PostCard({ post }) {
  const { _id, imageUrl, category, title, author, createdAt } = post;
  const date = new Date(createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link key={_id} href='/' className='px-20 relative my-10 block h-64 w-full'>
      <Pill className='bg-green text-white absolute top-2 left-2 z-20'>
        {category}
      </Pill>
      <Image
        src={imageUrl}
        alt='just beacuse next needed it'
        fill
        className='rounded-lg overflow-hidden object-cover'
      />
      <div className='absolute rounded-lg -mb-12 p-2.5 space-y-2 bottom-0 z-10 w-[90%] left-0 right-0 mx-auto bg-white shadow-lg'>
        <h1 className='font-semibold text-lg'>{title}</h1>
        <ul className='flex flex-wrap gap-4'>
          <li>
            <span className='flex items-center gap-2 font-light text-gray'>
              <CiUser color='#dc3545' />
              {author}
            </span>
          </li>
          <li>
            <span className='flex items-center gap-2 font-light text-gray'>
              <CiClock2 color='#dc3545' />
              {date}
            </span>
          </li>
        </ul>
      </div>
    </Link>
  );
}
