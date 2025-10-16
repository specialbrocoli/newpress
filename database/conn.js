import mongoose from 'mongoose';

export default async function connectMongo() {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

  try {
    const { connection } = await mongoose.connect(uri);
    if (connection.readyState === 1) console.log('>>>> Connected to DB <<<<');
  } catch (err) {
    return Promise.reject(err);
  }
}
