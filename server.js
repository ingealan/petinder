const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Cargar las variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Conectar con MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB Atlas');
}).catch((err) => {
    console.error('Error conectando a MongoDB', err);
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Conexión exitosa con MongoDB Atlas!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
