import HeroCarousel from './components/HeroCarousel';
import Seaction from './components/Seaction';
import { fetchPosts, fetFeaturedPosts } from '@/lib/helper';

export default async function HomePage(req, res) {
  const posts = await fetchPosts();
  const featuredPosts = await fetFeaturedPosts()
  console.log(featuredPosts)
  return (
    <>
      <section className='flex-1'>
        <HeroCarousel />
      </section>

      <Seaction className='mt-18' title={'Featured Posts'} posts={featuredPosts}></Seaction>
    </>
  );
}
