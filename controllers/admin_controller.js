const User = require('../models/User');
const Setting = require('../models/Settings');
const Sample = require('../models/Sample');
const Message = require('../models/Message');
const Email = require('../models/Email');

module.exports.index = (req, res) =>{
    User.find().sort({ createdAt: desc }).then(users =>{
        Setting.find().then(settings =>{
            Message.find().sort({ date: desc }).then(messages =>{
                res.render('/admin/dashboard', {
                    users,
                    settings,
                    messages
                })
            })
        })
    })
}