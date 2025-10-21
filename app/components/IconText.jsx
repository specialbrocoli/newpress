'use client';

export default function IconText({ color, items, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <li key={index}>
            <span className='flex items-center gap-2 font-light'>
              <Icon color={color} />
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
