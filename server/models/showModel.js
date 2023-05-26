import mongoose from "mongoose";

const ShowSchema = mongoose.Schema({
  artistId: {
    type: String,
  },
  showDate: {
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

  // shows: [showsSchema],

  // timeStamps: true,
});

const Show = mongoose.model("Show", ShowSchema);

export default Show;
