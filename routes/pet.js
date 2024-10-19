// routes/pet.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

// Ruta para crear una nueva mascota
router.post('/', async (req, res) => {
    const { name, breed, age, ownerId } = req.body;

    try {
        const newPet = new Pet({ name, breed, age, owner: ownerId });
        await newPet.save();
        res.status(201).json({ message: 'Pet created successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating pet', error });
    }
});

// Ruta para obtener todas las mascotas de un propietario
router.get('/:ownerId', async (req, res) => {
    try {
        const pets = await Pet.find({ owner: req.params.ownerId });
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pets', error });
    }
});

module.exports = router;
