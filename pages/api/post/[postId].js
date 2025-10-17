import { deletePost, getPost, postPosts, putPost } from '@/database/controller';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      await getPost(req, res);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
