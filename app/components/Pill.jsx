import React from 'react';

export default function Pill({ children, className = ''}) {
  return (
    <span className={`px-2.5 py-1.5 rounded-md ${className}`}>
      {children}
    </span>
  );
}
