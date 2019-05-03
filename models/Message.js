const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    sub: { type: String, required: true },
    msg: { type: String, required: true },
    status: { type: String, default: 'received' },
    date: { type: Date, default: Date.now }
}) 