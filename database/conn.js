import mongoose from 'mongoose';

export default async function connectMongo() {
  const uri = process.env.MONGO_LOCAL || process.env.MONGO_REMOTE;

  try {
    const { connection } = await mongoose.connect(uri);
    if (connection.readyState === 1) console.log('>>>> Connected to DB <<<<');
  } catch (err) {
    return Promise.reject(err);
  }
}
