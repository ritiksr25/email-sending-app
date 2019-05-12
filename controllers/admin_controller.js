const User = require('../models/User');
const Setting = require('../models/Settings');
const Sample = require('../models/Sample');
const Email = require('../models/Email');

module.exports.index = (req, res) =>{
    User.find().sort({ createdAt: desc }).then(users =>{
        Setting.find().then(settings =>{
                res.render('/admin/dashboard', {
                    users,
                    settings
                })
            })
        })
}

module.exports.users = (req, res) => {
    User.find().then(users =>{
        res.render('/admin/user', { users });
    })
}

module.exports.changeStatus = (req, res) =>{
    User.findOne({ googleID: req.params.id }).then(user =>{
        if(user.status === 'unverified'){
            user.status = 'verified';
            user.save().then(user =>{
                res.redirect('/back');
            })
            .catch(err => console.log(err));
        }
        else{
            user.status = 'unverified';
            user.save().then(user =>{
                res.redirect('/back');
            })
            .catch(err => console.log(err));
        }
    })
}

