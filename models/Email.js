const mongoose = require('mongoose');

const EmailSchema = mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    sub: { type: String, required: true },
    msg: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: { type: Date, default: Date.now }
})

module.exports = Email = mongoose.model('Email', EmailSchema);