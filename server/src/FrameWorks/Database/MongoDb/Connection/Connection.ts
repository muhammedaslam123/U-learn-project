import mongoose from "mongoose";
import dbOptions from "../../../../Types/ConnectionInterFace";


const dbOpt: dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDb = async () => {
  try {
    // mongodb connection string
    mongoose.set("strictQuery", false);
    // await mongoose.connect("mongodb+srv://aslam123:aslam123@cluster0.re2ljg7.mongodb.net/U-learn_Project", dbOpt);
    await mongoose.connect("mongodb://localhost:27017/U-learn_Project", dbOpt);
    // eslint-disable-next-line no-console
    console.log("MongoDB connected");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  }
};
export default connectDb;