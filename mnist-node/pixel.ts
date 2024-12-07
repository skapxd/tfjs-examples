import sharp from "sharp";

// Dimensiones de la imagen
const width = 28;
const height = 28;

// Crear un buffer de píxeles completamente negro (RGBA, 4 canales)
const blackBuffer = Buffer.alloc(width * height * 4, 0); // Negro con opacidad completa (0, 0, 0, 255)

// Posición del punto rojo en el medio
const centerX = Math.floor(width / 2);
const centerY = Math.floor(height / 2);

// Calcular el índice en el buffer (RGBA)
const pixelIndex = (centerY * width + centerX) * 4;
blackBuffer[pixelIndex] = 255; // Rojo
blackBuffer[pixelIndex + 1] = 0; // Verde
blackBuffer[pixelIndex + 2] = 0; // Azul
blackBuffer[pixelIndex + 3] = 255; // Alfa (opacidad completa)

// Crear la imagen con sharp
sharp(blackBuffer, {
  raw: {
    width: width,
    height: height,
    channels: 4,
  },
})
  .toFile("./output.png") // Guardar como archivo
  .then(() => console.log("Imagen creada con éxito: output.png"))
  .catch((err) => console.error("Error al crear la imagen:", err));
