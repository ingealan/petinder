const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    ownerId1: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
    ownerId2: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
});

module.exports = mongoose.model('Match', matchSchema);
