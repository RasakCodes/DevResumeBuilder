import mongoose from "mongoose";

const connect = async () => {
  const configValue = process.env.NEXT_PUBLIC_MONGODB_URI || "";
  try {
    await mongoose.connect(configValue);
    console.log("connected");
  } catch (error) {
    console.log(error, "error");
    throw new Error("connection failed");
  }
};
export default connect;
