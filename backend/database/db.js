import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ChatBotAI",
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
