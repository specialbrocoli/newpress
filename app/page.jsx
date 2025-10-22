export const dynamic = 'force-dynamic';

// component imports
import PostsGrid from './components/PostsGrid';
import Story2Card from './components/Story2Card';
import StoryCard from './components/StoryCard';
import { Section } from './components/Section';
import HeroCarousel from './components/HeroCarousel';

// lib imports
import { fetchFeaturedPosts, fetchTopStories } from '@/lib/helper';
import TopPostCard from './components/TopPostCard';
import Tags from './components/Tags';

export default async function HomePage() {
  const featuredPosts = await fetchFeaturedPosts();
  const topStories = await fetchTopStories();
  const topPosts = await fetchTopStories();
  const _2topStories = topStories.slice(0, 2);
  const _3topStories = topStories.slice(-3);
  const _1post = topStories.slice(-2);
  const __post = topStories.slice(-1);

  const [_post] = __post;

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
        <div className='grid gap-6 lg:grid-cols-3'>
          {_2topStories.map((post) => (
            <StoryCard key={post._id} post={post} />
          ))}

          <div className='flex gap-6 flex-col justify-between md:h-[390px]'>
            {_3topStories.map((post) => (
              <Story2Card key={post._id} post={post}></Story2Card>
            ))}
          </div>
        </div>
      </Section>

      {/* featured videos */}
      <Section
        className='bg-dark-blue text-white'
        title={'Featured Videos'}
        link={'See All Videos'}
      >
        <div className='flex flex-col lg:flex-row lg:h-[816px] gap-6'>
          <div className='flex flex-col w-full lg:w-1/2 gap-6'>
            {_1post.map((post) => {
              return <StoryCard post={post} key={post._id} />;
            })}
          </div>

          <StoryCard
            className='w-full lg:w-1/2 !h-[390px] lg:!h-full'
            key={_post._id}
            post={_post}
          />
        </div>
      </Section>

      {/* top posts */}
      <Section
        className='bg-shadow-white'
        title={'Top Posts'}
        link={'See All Posts'}
      >
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Left side - 65% width */}
          <div className='w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6'>
            {topPosts.map((post) => (
              <StoryCard key={post._id} post={post} />
            ))}
          </div>

          {/* WIP: reminder im using the  _3topStories arr enhance logic later */}
          {/* Right side - 35% width with bg-white */}
          <div className='w-full lg:w-[35%] bg-white rounded-lg p-6 min-h-[400px] space-y-8'>
            <div className='space-y-3'>
              <h1 className='text-2xl font-medium'>Best stories</h1>
              {_3topStories.map((post) => (
                <Story2Card key={post._id} post={post} />
              ))}
            </div>

            <Tags
              tags={[
                'Travel',
                'News',
                'Life style',
                'Music',
                'Food',
                'History',
                'Fashion',
                'Politics',
                'Technology',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* editor's choice */}
      <Section title={"Editor's Choice"} link={'See All Posts'}>
        <PostsGrid posts={featuredPosts || []}></PostsGrid>
      </Section>
    </>
  );
}
