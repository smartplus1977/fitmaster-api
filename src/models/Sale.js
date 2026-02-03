import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },

    clientName: {
      type: String,
      required: true,
    },

    value: {
      type: Number,
      required: true,
    },

    commission: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["FIRST", "RECURRENT"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sale", SaleSchema);
