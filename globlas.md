# Objetos globales

# _dirname y __filename

```javascript
// Obtener la ruta del directorio del archivo actual
const directorioActual = __dirname;
console.log(directorioActual);

// Obtener la ruta completa del archivo actual
const archivoActual = __filename;
console.log(archivoActual);
```

# module y require

```javascript
// Creación de un módulo personalizado (saludo.js)
module.exports = {
  saludar: function() {
    console.log('¡Hola desde el módulo!');
  }
};

// Uso del módulo en otro archivo (main.js)
const saludo = require('./saludo'); // Importar el módulo
saludo.saludar(); // Llamar a la función del módulo
```