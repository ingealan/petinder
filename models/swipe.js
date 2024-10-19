// models/Swipe.js
const mongoose = require('mongoose');

const swipeSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }, // Referencia al dueño
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }, // Referencia a la mascota
    direction: { type: String, enum: ['left', 'right'], required: true }, // izquierda o derecha
    createdAt: { type: Date, default: Date.now }
});

const Swipe = mongoose.model('Swipe', swipeSchema);
module.exports = Swipe;
