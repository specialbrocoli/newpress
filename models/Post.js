import { Schema, models, model } from 'mongoose';

const postSchema = new Schema(
  {
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    trending: { type: Boolean, required: true },
    description: { type: String, required: true},
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    comments: { type: Number, required: true, trim: true },
    featured: { type: Boolean, required: true, default: false},
    createdAt: { type: Date, default: Date.now().toString(), required: true },
  },
  { timestamps: true }
);

const Post = models.Post || model('Post', postSchema);

export default Post;
