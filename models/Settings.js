const mongoose = require('mongoose');

const SettingSchema = mongoose.Schema({
    totalLimit: { type: Number, required: true },
    limitPerUser: { type: Number, required: true },
    updatedAt: { type: Date, default: Date.now } 
})

module.exports = Setting = mongoose.model('Setting', SettingSchema);