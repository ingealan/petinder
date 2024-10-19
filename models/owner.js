const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true }, // Asegúrate de que este campo esté presente
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    petName: { type: String, required: true },
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
