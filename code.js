const fs = require('fs');


const datos = {
  nombre: "Pedro",
  apellido: "Arias",
  edad: 58,
  salario: 2500,
  activo: true
};

const datosJSON = JSON.stringify(datos);

const nombreArchivo = 'datos.json';

fs.writeFile(nombreArchivo, datosJSON, (err) => {
  if (err) {

  } else {
    console.log('Archivo JSON creado y datos escritos con éxito.');
  
    fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
      if (err) {
      } else {
        const datosLeidos = JSON.parse(data);
        console.log('Contenido del archivo JSON:');
        console.log(datosLeidos);
      }
    });
  }
});