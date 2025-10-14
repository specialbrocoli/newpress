import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { FaTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Life Style', path: 'life-style' },
    { name: 'Travel', path: 'travel' },
    { name: 'Pages', path: '/#!' },
    { name: 'Product', path: 'shop' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <>
      <header className='h-[58px] bg-funblue'>
        <div className=''></div>
      </header>

      <nav className='flex items-center justify-between p-8 sticky top-0 z-50 bg-white'>
        <Link href={'/'} className='cursor-pointer inline-block'>
          <Image src={Logo} alt='Company branding' height={28} />
        </Link>

        <ul className='flex gap-8 text-base'>
          {navLinks.map((link) => {
            const { name, path } = link;
            return (
              <li
                key={name}
                className='list-disc marker:text-hotpink before:ml-2 font-medium font-poppins'
              >
                <Link href={path}>{name}</Link>
              </li>
            );
          })}
        </ul>

        <ul className='flex gap-6'>
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
      </nav>
    </>
  );
}
