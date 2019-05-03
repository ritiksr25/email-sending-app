const sendgrid = require('@sendgrid/mail');

const Email = require('../models/Email');

module.exports.send = (req, res) =>{
    res.render('/mail/sendmail');
}

module.exports.sendProcess = (req, res) =>{
    const { to, from, sub, msg } = req.body;
    const mail = { to, from, sub, text: 'sometext', html: msg, };
    sendgrid.send(mail);
    Email.create({ from, to, sub,  msg, user: req.user._id }).then(email =>{
        if(!email){
            req.flash('error_msg', 'Oops, Something went wrong!');
            res.redirect('/mails');
        }
        else{
            req.flash('success_msg', 'Mail Sent Successfully.');
            res.redirect('/mails/view');
        }
    })
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