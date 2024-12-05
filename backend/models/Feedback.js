const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    feedback_stars: { type: Number, min: 1, max: 5, required: true},
    feedback_comment: { type: String, required: true, trim: true },
    feedback_customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    feedback_product: { type: mongoose.Schema.Types.ObjectId, ref: 'Subservice', required : true},
    feedback_date : { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
