import mongoose from "mongoose";

const newsSchema =  new mongoose.Schema(
    {
        image: {
            type : String,
            required : true,
        },
        title: {
            type : String,
            required : true,
        },
        description: {
            type : String,
        }
    }
);

export default mongoose.model("News", newsSchema);