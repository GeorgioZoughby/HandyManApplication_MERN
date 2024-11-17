const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service_id: { type: Number, required: false },
  service_name: { type: String, required: false },
  service_icon: { type: String, required: false },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);
