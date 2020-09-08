const mongoose = require('mongoose');

const user = new mongoose.Schema({
    blogTitle: {
        type: String
    },
    blogDetails: {
        type: String
    },
    blogCategory: {
        type: String
    }
});

module.exports = User = mongoose.model('user', user);