import express from 'express';
import cors from 'cors';
import chokidar from 'chokidar';
import axios from 'axios';

const app = express();
const PORT = 4000;
const SERVER_PORT = 5000;
const SERVER_URL = `http://localhost:${SERVER_PORT}/api/events`; // URL del servidor principal

app.use(cors());
app.use(express.json());

// Chokidar: Monitoreo de la carpeta "principal"
const watcher = chokidar.watch('./principal', {
  ignored: /(^|[\/\\])\../, // Ignorar archivos ocultos
  persistent: true, // Mantiene la observación activa
});

// Escuchar eventos de archivos
watcher
  .on('add', async (path) => await sendEvent('Archivo agregado', path))
  .on('change', async (path) => await sendEvent('Archivo modificado', path))
  .on('unlink', async (path) => await sendEvent('Archivo eliminado', path));

// Función para enviar eventos al servidor principal
async function sendEvent(event, path) {
  try {
    await axios.post(SERVER_URL, { event, path });
    console.log(`Evento enviado: ${event} -> ${path}`);
  } catch (error) {
    console.error(`Error al enviar evento: ${error.message}`);
  }
}

// Iniciar servidor Express para el watcher
app.listen(PORT, () => {
  console.log(`Servidor Watcher escuchando en http://localhost:${PORT}`);
  console.log('Monitoreando cambios en la carpeta "./principal"');
});

// Servidor principal para recibir eventos
const mainServer = express();
mainServer.use(express.json());

mainServer.listen(SERVER_PORT, () => {
  console.log(`Servidor principal escuchando en http://localhost:${SERVER_PORT}`);
});
mainServer.post('/api/events', (req, res) => {
  const { event, path } = req.body;
  console.log(`Evento recibido: ${event} en ${path}`);
  res.status(200).send({ message: 'Evento registrado' });
});


