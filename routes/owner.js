const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Owner = require('../models/owner');
const router = express.Router();

// Ruta para registrar un nuevo owner
router.post('/register', async (req, res) => {
    const { name, username, email, password, petName } = req.body;

    try {
        // Verificar si el correo ya está registrado
        const existingOwner = await Owner.findOne({ email });
        if (existingOwner) {
            return res.status(400).json({ message: 'Email ya registrado' });
        }

        // Crear un nuevo owner
        const hashedPassword = await bcrypt.hash(password, 10);
        const newOwner = new Owner({
            name,
            username,
            email,
            password: hashedPassword,
            petName,
        });

        await newOwner.save();
        res.status(201).json({ message: 'Owner registrado con éxito' });
    } catch (error) {
        console.error('Error registrando owner', error);
        res.status(500).json({ message: 'Error registrando owner', error });
    }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el owner por username
        const owner = await Owner.findOne({ username });
        if (!owner) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Verificar la contraseña
        const isPasswordValid = await bcrypt.compare(password, owner.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar un token JWT
        const token = jwt.sign({ id: owner._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error('Error al iniciar sesión', error); // Esto te mostrará el error
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message || error }); // Proporciona más información en la respuesta
    }
});

module.exports = router;
