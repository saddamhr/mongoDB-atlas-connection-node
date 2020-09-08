const mongoose = require('mongoose');

const form = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    postCode: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    numberOfWindow: {
        type: String
    },
    numberOfExternalDoor: {
        type: String
    },
    homeOwner: {
        type: String
    },
    changingTheWindows: {
        type: String
    }

});

module.exports = User = mongoose.model('form', form);