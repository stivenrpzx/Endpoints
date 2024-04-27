app.get('/productos', (req, res) => {
    res.json({
      success: true,
      data: []
    });
  });
  
  app.post('/productos', (req, res) => {
    res.json({
      success: true,
      message: 'Producto añadido correctamente'
    });
  });
  
  // Implementamos los demás endpoints de manera similar
  