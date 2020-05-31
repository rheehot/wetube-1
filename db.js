import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log(`✅ Connected to DB\n\n\n`);

const handleError = () => console.log(`🖕 Error on DB\n\n\n`);

db.once("open", handleOpen);
db.on("error", handleError);
