const chokidar = require("chokidar");

const watcher = chokidar.watch("./principal", {
  ignored: /(^|[\/\\])\../, // Ignora archivos ocultos
  persistent: true, // Mantiene la observación activa
});

// Escuchar eventos
watcher
  .on("add", (path) => console.log(`Archivo agregado: ${path}`))
  .on("change", (path) => console.log(`Archivo modificado: ${path}`))
  .on("unlink", (path) => console.log(`Archivo eliminado: ${path}`));
