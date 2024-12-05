const mongoose = require('mongoose');

const serviceCardSchema = new mongoose.Schema({
    service_card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    imageURL: { type: String, required: true },
    cardDescription1: { type: String, required: true },
    cardDescription2: { type: String, required: true },
    cardColor: { type: String, required: true },
});

module.exports = mongoose.model('serviceCard', serviceCardSchema);
