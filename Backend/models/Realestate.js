import mongoose from "mongoose";

const realestateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100, 
      trim: true, 
    },
    category: {
      type: String,
      required: true,
      enum: ["Lands", "Homes", "Apartments", "Cabanas", "Shops", "Others"], 
      trim: true,
    },
    coverImg: {
      type: String, 
      required: true,
    },
    companyLogo: {
      type: String, 
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, 
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    video: {
      type: String, 
      required: false,
    },
    images: {
      type: [String], 
      default: [],
      required: false,
    },
    landMap: {
      type: [String], 
      required: true,
      validate: {
        validator: (arr) => arr.length >= 2, 
        message: "At least two land maps are required",
      },
    },
    googleMap: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: false,
      min: 0, 
    },
    baths: {
      type: Number,
      required: false,
      min: 0,
    },
  },
  {
    timestamps: true,
    indexes: [
      { key: { location: 1 } },
      { key: { price: 1 } }, 
      { key: { category: 1 } }, 
    ],
  }
);

export default mongoose.model("RealEstate", realestateSchema); 