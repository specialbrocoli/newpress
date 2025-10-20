// next imports
import Link from 'next/link';

export function Section({ title, link, path = '/', children }) {
  return (
    <section className='container mx-auto px-2 md:px-20 py-8 mt-18'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl lg:text-4xl text-left font-black'>{title}</h1>
        <Link className='hidden md:block md:uppercase md:underline md:underline-offset-4' href={path}>
          {link} &nbsp; &rarr;
        </Link>
      </div>
      {children}
    </section>
  );
}
