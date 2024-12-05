const mongoose = require('mongoose');

const subserviceSchema = new mongoose.Schema({
    subservice_name: { type: String, required: false },
    created_at: { type: Date, default: Date.now },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true }
});

module.exports = mongoose.model('Subservice', subserviceSchema);
