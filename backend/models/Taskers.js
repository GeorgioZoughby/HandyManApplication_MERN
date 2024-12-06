const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subservice',
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { _id: false });

const taskersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender : {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  services: [serviceSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  imageURL: {
    type: String,
    required: true
  }
});

const Taskers = mongoose.model('Taskers', taskersSchema);

module.exports = Taskers;
