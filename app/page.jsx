export const dynamic = 'force-dynamic';

import HeroCarousel from './components/HeroCarousel';
import PostsGrid from './components/PostsGrid';
import { Section } from './components/Section';
import { fetchFeaturedPosts, fetchTopStories } from '@/lib/helper';

export default async function HomePage() {
  const featuredPosts = await fetchFeaturedPosts();
  const topStories = await fetchTopStories();
  return (
    <>
      {/* hero carousel */}
      <HeroCarousel />

      {/* featured posts */}
      <Section title={'Featured Posts'} link={'See All Posts'}>
        <PostsGrid posts={featuredPosts || []}></PostsGrid>
      </Section>

      {/* top stories */}
      <Section title={'Top Stories'} link={'See All Posts'}></Section>

      {/* editor's choice */}
      <Section title={'Editor Choice'} link={'See All Posts'}>
        <PostsGrid posts={featuredPosts || []}></PostsGrid>
      </Section>
    </>
  );
}
