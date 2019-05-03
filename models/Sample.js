const mongoose = require('mongoose');

const SampleSchema = mongoose.Schema({
    sub: { type: String, required: true },
    msg: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = Sample = mongoose.model('Sample', SampleSchema);