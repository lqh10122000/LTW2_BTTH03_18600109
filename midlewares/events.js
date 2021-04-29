const express = require('express');
const events = require('../models/events');


module.exports = function event(req, res, next)
{
    // res.locals.currentUser = req.
    const {UserID} = res.session;

    if(req.session.currentUser)
    {
        const Events = await events.getAllEvents();
    }
    else
    {
        console.log('Loi mat tieu oi ');
        
    }
}