const mongoose = require('mongoose');

const popularServiceSchema = new mongoose.Schema({
    subService: { type: mongoose.Schema.Types.ObjectId, ref: 'Subservice', required: true },
    imageURL: { type: String, required: true},
    price: { type: Number, required: true},
});

module.exports = mongoose.model('PopularService', popularServiceSchema);
