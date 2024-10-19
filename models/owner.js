const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    petName: { type: String, required: true },
});

module.exports = mongoose.model('Owner', ownerSchema);
