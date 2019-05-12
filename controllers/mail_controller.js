const sendgrid = require('@sendgrid/mail');
require('dotenv').config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const Email = require('../models/Email');

module.exports.send = (req, res) =>{
    res.render('/mail/sendmail');
}

module.exports.sendProcess = (req, res) =>{
    const { to, from, sub, msg } = req.body;
    const mail = { to, from, sub, html: msg };
    sendgrid.send(mail).then(sent =>{
        Email.create({ from, to, sub,  msg, user: req.user._id })
            .then(email =>{
                req.flash('success_msg', 'Mail Sent Successfully.');
                res.redirect('/mails/view');
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
       

module.exports.view = (req, res) =>{
    Email.find({ user: req.user._id }).then(email => {
        res.render('/mail/history', { email });
    })
}

module.exports.viewOne = (req, res) =>{
    Email.findOne({ _id: req.params.id }).then(email => {
        res.render('/mail/view', { email });
    })
}