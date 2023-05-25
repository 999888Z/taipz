import mongoose from "mongoose";



const ArtistSchema = mongoose.Schema(
  {
    artistName: {
      type: String,
      required: true,
      unique:true,
      
    },
    artistImage: {
      type: String,
      required: true,
    },

    // shows: [showsSchema],

    timeStamps: true,
  }
);

const Artist = mongoose.model("Artist", ArtistSchema);

export default Artist;