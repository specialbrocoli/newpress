'use client';

// next & react imports
import Link from 'next/link';
import Image from 'next/image';
import { NextResponse } from 'next/server';
import { useEffect, useState } from 'react';

// embla carousel
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

// importing icons
import { CiUser } from 'react-icons/ci';
import { IoMdFlame } from 'react-icons/io';
import { CiChat1 } from 'react-icons/ci';
import { CiClock2 } from 'react-icons/ci';

// component import
import Pill from '@/app/components/Pill';

export default function HeroCarousel() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/post');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        return new NextResponse('Error Fetching Hero Carousel Data!', {
          status: 500,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const renderSlides = posts.map((post) => {
    const {
      _id,
      title,
      imageUrl,
      category,
      trending,
      comments,
      author,
      createdAt,
    } = post;
    const date = new Date(createdAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return (
      <Link
        href={`/`}
        key={_id}
        className='embla__slide text-white h-[400px] md:h-auto md:aspect-[899/533] rounded-2xl overflow-hidden bg-black relative block'
      >
        <Image
          src={imageUrl}
          alt={`${title}`}
          priority={true}
          fill
          className='object-cover'
        />

        {/* carousel overlay */}
        <div className='absolute inset-0 bg-black/30 z-10'></div>

        {/* carousel body */}
        <div className='absolute inset-0 z-20 flex flex-col justify-end p-6 gap-3 lg:gap-4 '>
          <div className='flex items-center'>
            <Pill className='bg-yellow'>{category}</Pill>

            <span className='ml-4'>
              {trending ? (
                <div className='flex items-center justify-between gap-1'>
                  <IoMdFlame size={20} color='#dc3545' />
                  <span>Trending</span>
                </div>
              ) : (
                ''
              )}
            </span>
          </div>

          <h1 className='text-left text-lg font-semibold md:font-bold lg:text-3xl max-w-[28ch]'>
            {title}
          </h1>

          {/* carousel footer */}
          <ul className='flex flex-wrap gap-4'>
            <li>
              <span className='flex items-center gap-2 font-light'>
                <CiUser />
                {author}
              </span>
            </li>
            <li>
              <span className='flex items-center gap-2 font-light'>
                <CiClock2 />
                {date}
              </span>
            </li>
            <li>
              <span className='flex items-center gap-2 font-light'>
                <CiChat1 />
                {comments}
              </span>
            </li>
          </ul>
        </div>
      </Link>
    );
  });

  if (loading)
    return <h1 className='text-2xl font-medium text-center'>loading...</h1>;

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>{renderSlides}</div>
    </div>
  );
}
