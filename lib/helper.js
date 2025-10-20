export const fetchPosts = async () => {
  const url = process.env.REMOTE
    ? `https://${process.env.REMOTE}`
    : 'http://localhost:3000';

  try {
    const res = await fetch(`${url}/api/post`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
    return [];
  }
};

export const fetchFeaturedPosts = async () => {
  const url = process.env.REMOTE
    ? `https://${process.env.REMOTE}`
    : 'http://localhost:3000';

  try {
    const res = await fetch(`${url}/api/post?featured=true&limit=3`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
    return [];
  }
};

export const fetchTopStories = async () => {
  const url = process.env.REMOTE
    ? `https://${process.env.REMOTE}`
    : `http://localhost:3000`;

  try {
    const res = await fetch(`${url}/api/post?limit=5`);
    if (!res.ok) console.error('Failed to fetch top stories');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching top stories', error);
    return [];
  }
};
