// routes/swipe.js
const express = require('express');
const router = express.Router();
const Swipe = require('../models/swipe');

// Ruta para registrar un swipe
router.post('/', async (req, res) => {
    const { ownerId, petId, direction } = req.body;

    try {
        const newSwipe = new Swipe({ owner: ownerId, pet: petId, direction });
        await newSwipe.save();
        res.status(201).json({ message: 'Swipe recorded successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error recording swipe', error });
    }
});

module.exports = router;
