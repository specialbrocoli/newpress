export const dynamic = 'force-dynamic'

import HeroCarousel from './components/HeroCarousel';
import Seaction from './components/Seaction';
import { fetchPosts, fetFeaturedPosts } from '@/lib/helper';

export default async function HomePage(req, res) {
  const featuredPosts = await fetFeaturedPosts()
  return (
    <>
      <section className='flex-1'>
        <HeroCarousel />
      </section>

      <Seaction className='mt-18' title={'Featured Posts'} posts={featuredPosts}></Seaction>
    </>
  );
}
