import Post from '@/models/Post';

// controller

// GET: http://localhost:3000/api/post/
export async function getPosts(req, res) {
  const { limit, featured } = req.query;
  let query = {};

  try {
    if (featured === 'true') query.featured = true;
    let posts = Post.find(query);
    if (limit) posts = posts.limit(parseInt(limit));
    const result = await posts;
    if (!result) return res.status(404).json({ error: 'Data Not Found!' });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json('Error While Fetching Data!');
  }
}

// GET: http://localhost:3000/api/post/:postId
export async function getPost(req, res) {
  try {
    const { postId } = req.query;

    if (postId) {
      const post = await Post.findById(postId);
      return res.status(200).json(post);
    } else {
      return res.status(404).json({ error: 'Post Not Found!' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error Fetching User!' });
  }
}

// POST: http://localhost:3000/api/post
export async function postPosts(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      res.status(404).json({ error: 'Form Data Not Provided...!' });
    const posts = await Post.create(formData);
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error });
  }
}

// PUT: http://localhost:3000/api/post/:id
export async function putPost(req, res) {
  try {
    const { id } = req.query;
    const formData = req.body;

    if (id && formData) {
      const post = await Post.findByIdAndUpdate(id, formData, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(post);
    }

    if (!post) res.status(404).json({ error: 'Post Not Found!' });
  } catch (error) {
    res.status(404).json({ error: 'Error Updating Post!' });
  }
}

// DELETE: http://localhost:3000/api/post/:id
export async function deletePost(req, res) {
  try {
    const { postId } = req.query;

    if (postId) {
      await Post.findByIdAndDelete(postId);
      return res.status(200).json({ deleted: postId });
    }

    if (!postId) return res.status(404).json({ error: 'Post Not Found!' });
  } catch (error) {
    res.status(404).json({ error: 'Error Deleting User!' });
  }
}
