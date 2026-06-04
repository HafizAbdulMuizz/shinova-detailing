import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/shinova";

export async function connectDB() {

  if (mongoose.connections[0].readyState) {
    return;
  }

  await mongoose.connect(MONGODB_URI);

  console.log("MongoDB Connected");
}