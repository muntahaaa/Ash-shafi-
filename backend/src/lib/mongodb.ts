import mongoose from 'mongoose';

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached = global.mongooseCache ?? { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase() {
  const mongodbUrl = process.env.MONGODB_URL ?? process.env.MONGODB_URI;

  if (!mongodbUrl) {
    throw new Error('Please define the MONGODB_URL or MONGODB_URI environment variable');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongodbUrl, {
      dbName: process.env.MONGODB_DB,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
