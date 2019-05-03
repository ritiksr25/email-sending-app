const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    googleID: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    sentMails: { type: Number, default: 0 },
    status: { type: String, default: 'unverified' }
});

module.exports = User = mongoose.model('User', UserSchema);
