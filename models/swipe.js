const mongoose = require('mongoose');

const swipeSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
    petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    direction: { type: String, enum: ['left', 'right'], required: true }, // Ejemplo: izquierda o derecha
});

module.exports = mongoose.model('Swipe', swipeSchema);
