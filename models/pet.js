// models/Pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }, // Referencia al dueño
    createdAt: { type: Date, default: Date.now }
});

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
