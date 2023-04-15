import mongoose from "mongoose";
const userSchima = new mongoose.Schima(
  {
    fullname: {
        type: String,
        required: true, 
      },
      phone: {
        type: Number,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      Gender: {
        type: String,
        required: true,
      },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    confirm: {
        type: String,
        required: true,
      },
    role: {
      type: String,
      default: "user",
    },
    photo: {
        type: String,
      },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchima);