import mongoose from 'mongoose';

class Database {
  public static async connect(): Promise<void> {
    try {
      const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/kairosagenda';
      await mongoose.connect(mongoURI);
      console.log('✅ Connected to MongoDB');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
    }
  }
}

export default Database;
