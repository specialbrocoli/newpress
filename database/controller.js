import Post from '@/models/post';

// controller

// GET: http://localhost:3000/api/post/ || http://localhost:3000/api/post/:id
export async function getPosts(req, res) {
  try {
    const { id } = req.query;

    if (id) {
      const post = await Post.findById(id);
      if (!post) return res.status(404).json({ error: 'Post Not Found!' });
      return res.status(200).json(post);
    }

    const posts = await Post.find();
    if (!posts) return res.status(404).json({ error: 'Data Not Found!' });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json('Error While Fetching Data!');
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
    const { id } = req.query;

    if (id) {
      await Post.findByIdAndDelete(id);
      return res.status(200).json({ deleted: id });
    }

    if (!id) return res.status(404).json({ error: 'Post Not Found!' });
  } catch (error) {
    res.status(404).json({ error: 'Error Deleting User!' });
  }
}
