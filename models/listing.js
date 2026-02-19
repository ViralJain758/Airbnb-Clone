const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingSchema = new schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  image: {
    filename: {
      type: String,
    },
    url: {
      type: String,
      default:
        "https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg",
      set: (v) =>
        v === ""
          ? "https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg"
          : v,
    },
  },

  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
