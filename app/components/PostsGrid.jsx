import PostCard from './PostCard';

export default function PostsGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className='container mx-auto px-4'>
        <p className='text-center text-gray-500'>No posts available.</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center gap-6 px-2'>
      {posts.map((post) => {
        const { _id } = post;
        return <PostCard key={_id} post={post} />;
      })}
    </div>
  );
}
