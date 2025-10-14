import connectMongo from '@/database/conn';
import {
  deletePost,
  getPosts,
  postPosts,
  putPost,
} from '@/database/controller';

export default function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the connection!' })
  );

  const { method } = req;

  switch (method) {
    case 'GET':
      getPosts(req, res);
      break;
    case 'POST':
      postPosts(req, res);
      break;
    case 'PUT':
      putPost(req, res);
      break;
    case 'DELETE':
      deletePost(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
