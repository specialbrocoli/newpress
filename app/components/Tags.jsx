// component imports
import Pill from './Pill';

function Tags({ tags }) {
  return (
    <div className='space-y-8'>
      <h1 className='text-2xl font-medium'>Tags</h1>
      <div className='flex flex-wrap gap-2 mt-3'>
        {tags.map((tag, index) => (
          <Pill
            className='bg-transparent text-gray border border-gray'
            key={index}
          >
            {tag}
          </Pill>
        ))}
      </div>
    </div>
  );
}

export default Tags;
