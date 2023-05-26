import mongoose from "mongoose";

const SongSchema = mongoose.Schema({
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

  // shows: [showsSchema],

  // timeStamps: true,
});

const Song = mongoose.model("Song", SongSchema);

export default Song;