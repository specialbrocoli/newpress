// next imports
import Link from 'next/link';

// component imports
import PostCard from '@/app/components/PostCard';

export default function Seaction({ title, posts, className='' }) {
    if (!posts || posts.length === 0) {
    return (
      <section className={`px-4 py-8 md:px-20 ${className}`}>
        <h1 className='text-3xl text-left font-black mb-6'>{title}</h1>
        <p className='text-center text-gray-500'>No posts available.</p>
      </section>
    );
  }

  return (
    <section className={`px-4 py-8 md:px-20 ${className}`}>
      <h1 className='text-3xl text-left font-black mb-6'>{title}</h1>
      <div className='container mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center gap-6'>
        {posts.map((post) => {
          const { _id } = post;
          return <PostCard key={_id} post={post} />;
        })}
      </div>
    </section>
  );
}
