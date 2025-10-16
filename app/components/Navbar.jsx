'use client';

// next imports
import Link from 'next/link';
import Image from 'next/image';

// assets import
import Logo from '@/public/logo.png';

// icons imports
import { FaTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoSearchSharp } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Life Style', path: 'life-style' },
    { name: 'Travel', path: 'travel' },
    { name: 'Pages', path: '/#!' },
    { name: 'Product', path: 'shop' },
    { name: 'Contact us', path: '/contact' },
  ];

  const handleNav = () => setNav(!nav);

  return (
    <>
      <header className='h-[58px] bg-funblue'>
        <div className=''></div>
      </header>

      <nav className='flex items-center justify-between p-8 sticky top-0 z-50 bg-white'>
        <Link href={'/'} className='cursor-pointer inline-block'>
          <Image src={Logo} alt='Company branding' height={28} />
        </Link>

        <ul className='hidden lg:flex lg:gap-8'>
          {navLinks.map((link) => {
            const { name, path } = link;
            return (
              <li
                key={name}
                className='list-disc marker:text-hotpink before:ml-2 font-medium font-poppins text-base'
              >
                <Link href={path}>{name}</Link>
              </li>
            );
          })}
        </ul>

        <ul className='hidden lg:flex lg:gap-6 '>
          <li className='bg-gray-400/25 rounded-full p-2'>
            <Link href={'https://fb.me'} target='_blank' className='block'>
              <FaFacebookF size={20} color='#191D3B' />
            </Link>
          </li>
          <li className='bg-gray-400/25 rounded-full p-2'>
            <Link href={'https://x.com'} target='_blank'>
              <FaTwitter size={20} color='#191D3B' />
            </Link>
          </li>
          <li className='bg-gray-400/25 rounded-full p-2'>
            <Link href={'#!'}>
              <IoSearchSharp size={20} color='#191D3B' />
            </Link>
          </li>
        </ul>

        <button onClick={handleNav} className='border p-2 lg:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </nav>
    </>
  );
}
