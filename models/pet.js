const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // Ejemplo: perro, gato, etc.
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
});

module.exports = mongoose.model('Pet', petSchema);
