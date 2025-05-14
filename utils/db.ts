import mongoose from "mongoose";

const connectToDB = async (): Promise<void> => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("MongoDB URI is not defined in the environment variables.");
  }

  // Avoid reconnecting if already connected
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB already connected.");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Database connection failed.");
  }
};

export default connectToDB;
