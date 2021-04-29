
const asyncHandler = require('express-async-handler');
const express = require('express');
const Register = express.Router();
const User = require('../models/user');


Register.get('/', function(req, res) {

    res.render('./register');
});


Register.post('/', asyncHandler( async function(req, res)
{

    const {fullname, email, password} = req.body; 

    if(fullname && email && password)
    {
        User.CreateUser(fullname, email, password);

        res.redirect('/');
        
    }
    else{
        res.redirect('/reg');
    }

    // const found = await User.findByEmail(email)
    // {

    //     if(found && found.password === password)
    //     {
    //         console.log('found ' + found.Name);
    //         req.session.currentUser = found;
    //         res.locals.currentUser = found.id;
    //         res.locals.title = 'Tổng 2 Số';
    //         res.locals.result = 0;
    //         res.redirect('/abc');
    //     }
    //     else
    //     {
    //         res.locals.title = "ERRO";
    //         res.render('auth/login');
    //     }

    // };
    
}));


module.exports = Register;