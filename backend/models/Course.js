// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   videos: [{ title: String, url: String }],
//   instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// });

// module.exports = mongoose.model('Course', courseSchema);



const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  videos: [{ title: String, url: String }],
  instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Added userId
});

courseSchema.index({ title: 1, instructorId: 1 }, { unique: true });


module.exports = mongoose.model('Course', courseSchema);

