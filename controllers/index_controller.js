const Message = require('../models/Message');

module.exports.index = (req, res) => {
    res.render('/index/index');
}

module.exports.about = (req, res) => {
    res.render('/index/about');
}

module.exports.contact = (req, res) => {
    res.render('/index/contact');
}

module.exports.contactProcess = (req, res) => {
    const { name, email, sub, msg } = req.body;
    if (!name || !email || !sub || !msg) {
        req.flash('error_msg', 'All fields are required!');
        res.redirect('/back');
    }
    else {
        Message.create(req.body).then(msg => {
            if (!msg) {
                req.flash('error_msg', 'Oops, Something went wrong!');
                res.redirect('/back');
            }
            else {
                req.flash('success_msg', 'Thanks, Your message has been received!');
                res.redirect('/back');
            }
        })
    }
}
