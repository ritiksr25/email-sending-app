module.exports.logout = (req, res) =>{
    req.logout();
    req.flash('success_msg', 'Logged out Successfully!!');
    res.redirect('/');
}
