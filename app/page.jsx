export const dynamic = 'force-dynamic';

// component imports
import PostsGrid from './components/PostsGrid';
import Story2Card from './components/Story2Card';
import StoryCard from './components/StoryCard';
import { Section } from './components/Section';
import HeroCarousel from './components/HeroCarousel';

// lib imports
import { fetchFeaturedPosts, fetchTopStories } from '@/lib/helper';

export default async function HomePage() {
  const featuredPosts = await fetchFeaturedPosts();
  const topStories = await fetchTopStories();
  const _2topStories = topStories.slice(0, 2);
  const _3topStories = topStories.slice(-3);

  return (
    <>
      {/* hero carousel */}
      <HeroCarousel />

      {/* featured posts */}
      <Section title={'Featured Posts'} link={'See All Posts'}>
        <PostsGrid posts={featuredPosts || []}></PostsGrid>
      </Section>

      {/* top stories */}
      <Section
        className='bg-shadow-white'
        title={'Top Stories'}
        link={'See All Posts'}
      >
        <div className='grid place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {_2topStories.map((post) => (
            <StoryCard key={post._id} post={post} />
          ))}

          <div className='flex gap-2 flex-col justify-between md:h-[390px]'>
            {_3topStories.map((post) => (
              <Story2Card key={post._id} post={post} />
            ))}
          </div>
        </div>
      </Section>

      {/* editor's choice */}
      <Section title={'Editor Choice'} link={'See All Posts'}>
        <PostsGrid posts={featuredPosts || []}></PostsGrid>
      </Section>
    </>
  );
}
