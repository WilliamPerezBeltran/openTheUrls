function formatFilename(filename) {
  return filename
    .replace(/[_-]/g, ' ') // Reemplazar guiones bajos y medios por espacios
    .replace(/\s+/g, ' ') // Eliminar espacios extra
    .replace(/\(.*?\)/g, '') // Eliminar cualquier contenido entre paréntesis
    .trim() // Eliminar espacios al inicio y al final
    .toLowerCase(); // Convertir todo a minúsculas
}

// Definir lista de nombres de ejemplo
const filenames = [
  "z_z_simon mariano (copy)",
  "ruby_especialization",
  "youtube-videos",
  "craking_the_coding_interview"
];

// Aplicar función a cada nombre
const formattedFilenames = filenames.map(formatFilename);

// Mostrar nombres formateados en consola
console.log(formattedFilenames);
