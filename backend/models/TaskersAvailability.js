const mongoose = require('mongoose');
const { Schema } = mongoose;

const availabilitySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    fromHour: {
        type: String,
        required: true
    },
    toHour: {
        type: String,
        required: true
    }
});

const taskersAvailabilitySchema = new Schema({
    taskerId: {
        type: Schema.Types.ObjectId,
        ref: 'Tasker',
        required: true
    },
    availability: [availabilitySchema]
});

const TaskersAvailability = mongoose.model('TaskersAvailability', taskersAvailabilitySchema);

module.exports = TaskersAvailability;
