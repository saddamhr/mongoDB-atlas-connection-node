const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
    const { blogTitle, blogDetails, blogCategory } = req.body;
    let user = {};
    user.blogTitle = blogTitle;
    user.blogDetails = blogDetails;
    user.blogCategory = blogCategory;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route;