const mongoose = require('mongoose');
// Define a Mongoose Schema
const UrlSchema = new mongoose.Schema({
  fullUrl: {type: String,required: true},
  shortId: {type: String,unique: true,required: true},
  clicks: {type: Number,default: 0}
});
// Create a Mongoose model
const Url = mongoose.model('url', UrlSchema);
// Export the Moongoose Model
module.exports = Url
