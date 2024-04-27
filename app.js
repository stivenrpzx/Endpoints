const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/productos', (req, res) => {
  // Implementación para obtener todos los productos
});

app.get('/productos/:id', (req, res) => {
  // Implementación para obtener un producto por ID
});

app.post('/productos', (req, res) => {
  // Implementación para añadir un nuevo producto
});

// Asi mismo Implementamos los demás endpoints de usuarios y pedidos de manera similar.



app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
  });
  
