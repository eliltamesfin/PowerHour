import { Schema, model } from "mongoose";

const offerSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  monthlyPrice: { type: Number, required: true },
  deadline: { type: String, required: true },
  duration: { type: String, required: true }
}, { timestamps: true });

const Offer = model('Offer', offerSchema);

export default Offer;
