export const fetchPosts = async () => {
  const SITE_URI = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  try {
    const res = await fetch(`${SITE_URI}/api/post`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
    return []
  }
};

export const fetFeaturedPosts = async () => {
  const SITE_URI = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  try {
    const res = await fetch(`${SITE_URI}/api/post?featured=true&limit=3`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
    return []
  }
};
