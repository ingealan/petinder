// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const ownerRoutes = require('./routes/owner'); // Importar rutas de owner
const petRoutes = require('./routes/pet');     // Importar rutas de pet
const swipeRoutes = require('./routes/swipe'); // Importar rutas de swipe

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexión exitosa con MongoDB Atlas!'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Usar las rutas
app.use('/owners', ownerRoutes); // Rutas de owner
app.use('/pets', petRoutes);     // Rutas de pet
app.use('/swipes', swipeRoutes); // Rutas de swipe

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');  // Asegúrate de que 'index' sea el nombre correcto de tu vista
});

// Iniciar el servidor en el puerto especificado
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
