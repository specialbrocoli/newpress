export const fetchPosts = async () => {
  // const BASE_URL = 'http://localhost:3000/';

  try {
    const res = await fetch('http://localhost:3000/api/post');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
  }
};

export const fetFeaturedPosts = async () => {
  // const BASE_URL = 'http://localhost:3000/';

  try {
    const res = await fetch(
      'http://localhost:3000/api/post?featured=true&limit=3'
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching posts!', error);
  }
};
