// models/Match.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }, // Referencia al dueño
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }, // Referencia a la mascota
    createdAt: { type: Date, default: Date.now }
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;
