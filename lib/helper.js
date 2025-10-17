export const fetchPosts = async () => {
  const SITE_URI = 'http://localhost:3000/api/post' || process.env.BASE_URI;

  try {
    const res = await fetch(SITE_URI);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
    return []
  }
};

export const fetFeaturedPosts = async () => {
  const SITE_URI = 'http://localhost:3000/api/post' || process.env.BASE_URI;

  try {
    const res = await fetch(`${SITE_URI}?featured=true&limit=3`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
    return []
  }
};
