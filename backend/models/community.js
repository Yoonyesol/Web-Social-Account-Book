const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const communitySchema = new Schema({
  writer: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  hit: { type: Number, default: 0, required: true },
  like: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  comments: [
    {
      writer: { type: Schema.Types.ObjectId, ref: "User", required: true },
      content: { type: String, required: true },
      date: { type: Date, default: Date.now, required: true },
    },
  ],
});

module.exports = mongoose.model("Community", communitySchema);
