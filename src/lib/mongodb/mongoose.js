import mongoose from "mongoose";
let initialized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("Already connected to mongo€DB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "next-socials-app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    initialized = true;
  } catch (error) {
    console.log("error connection to MongoDB", error);
  }
};
