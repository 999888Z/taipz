import mongoose from "mongoose";
import Show from './showModel.js'




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
    date: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    showImage: {
      type: String,
    },
    tourName: {
      type: String,
    },
    songName: {
      type: String,
      required: true,
    },
    audioLink: {
      type: String,
      required: true,
    },
    track: {
      type: Number,
      required: true,
    },

    // shows: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Show' }],

    // timeStamps: true,
  }
);

const Artist = mongoose.model("Artist", ArtistSchema);
// const Show = mongoose.model("Show", ShowSchema);

export default Artist;