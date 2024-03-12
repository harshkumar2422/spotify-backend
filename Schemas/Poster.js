import mongoose from "mongoose";
const PosterSchema = new mongoose.Schema({

        url: {
       type:String
        },
      public_id: {
          type:String
      }
  
},{timestamps:true});

export const Poster = mongoose.model("Poster",PosterSchema)