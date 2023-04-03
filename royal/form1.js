import mongoose from 'mongoose';
const form1Schema = new mongoose.Schema(
  {
    order_ID: {
      type: Number,
      required: true,
      unique: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    type: {
      type: string,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    payment: {
      type: Number,
      required: true,
    },
    payment_type: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Review',
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },  
  },
  { timestamps: true }
);
export default mongoose.model('form1', form1Schema);