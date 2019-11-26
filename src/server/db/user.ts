import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
  id: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("user", User);
