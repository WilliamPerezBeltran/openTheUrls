import express from "express";
import cors from "cors";
import chokidar from "chokidar";
import axios from "axios";
import fs from "fs";

const app = express();
const PORT = 4000;
const SERVER_PORT = 5000;
const SERVER_URL = `http://localhost:${SERVER_PORT}/api/events`;

app.use(cors());
app.use(express.json());

const watcher = chokidar.watch("./principal", {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

watcher
  .on("add", async (path) => await sendEvent("addFile", path))
  .on("change", async (path) => await sendEvent("changeFile", path))
  .on("unlink", async (path) => await sendEvent("deletedFile", path));

async function sendEvent(event, path) {
  try {
    await axios.post(SERVER_URL, { event, path });
    console.log(`Evento enviado: ${event} -> ${path}`);
  } catch (error) {
    console.error(`Error al enviar evento: ${error.message}`);
  }
}

app.listen(PORT, () => {
  console.log(`Iniciar servidor Watcher en http://localhost:${PORT}`);
  console.log('Monitorear cambios en la carpeta "./principal"');
});

const mainServer = express();
mainServer.use(express.json());

mainServer.listen(SERVER_PORT, () => {
  console.log(`Iniciar servidor principal en http://localhost:${SERVER_PORT}`);
});

const data = [];

mainServer.post("/api/events", async (req, res) => {
  const { event, path } = req.body;
  const pathSegments = path.split("/");
  const title = pathSegments[1];

  if (event === "addFile") {
    const urls = await readUrls(path);
    data.push({
      title: formatFilename(title),
      urlPath: path,
      urls: urls,
    });
  }

  console.log(`Recibir evento: ${event} en ${path}`);
  console.log("Actualizar datos almacenados:", data);

  res.status(200).send({ message: "Registrar evento" });
});

async function readUrls(path) {
  try {
    const fileContent = fs.readFileSync(path, "utf8");
    const urlRegex = /^(https?:\/\/|www\.)[^\s\/$.?#].[^\s]*$/i;
    const lines = fileContent
      .split("\n")
      .map(line => line.trim())
      .filter(line => urlRegex.test(line));
    return lines;
  } catch (error) {
    console.error(`Error al leer el archivo: ${error.message}`);
    return [];
  }
}

function formatFilename(filename) {
  return filename
    .replace(/[_-]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\(.*?\)/g, '')
    .trim()
    .toLowerCase();
}