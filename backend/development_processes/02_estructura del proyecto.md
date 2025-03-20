project-root/
│── backend/
│   ├── src/
│   │   ├── entities/
│   │   │   ├── Title.ts
│   │   │   ├── Url.ts
│   │   ├── controllers/
│   │   │   ├── title.controller.ts
│   │   │   ├── url.controller.ts
│   │   ├── services/
│   │   │   ├── title.service.ts
│   │   │   ├── url.service.ts
│   │   ├── routes/
│   │   │   ├── title.routes.ts
│   │   │   ├── url.routes.ts
│   │   ├── utils/
│   │   │   ├── chokidarWatcher.ts
│   │   ├── index.ts
│   │   ├── app.ts
│   │   ├── data-source.ts
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TitleList.tsx
│   │   │   ├── UrlList.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Dashboard.tsx
│   │   ├── services/
│   │   │   ├── api.ts
│   │   ├── App.tsx
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│── database/
│   ├── data/
│   ├── docker-compose.override.yml
│── .env
│── README.md
│── docker-compose.yml
==============================================================

backend/
│── src/
│   ├── entities/          # Definición de entidades para TypeORM
│   │   ├── Title.ts       # Entidad Title
│   │   ├── Url.ts         # Entidad Url
│   ├── controllers/       # Controladores para manejar las peticiones HTTP
│   │   ├── title.controller.ts
│   │   ├── url.controller.ts
│   ├── services/          # Lógica de negocio y acceso a base de datos
│   │   ├── title.service.ts
│   │   ├── url.service.ts
│   ├── routes/            # Definición de rutas de la API
│   │   ├── title.routes.ts
│   │   ├── url.routes.ts
│   ├── utils/             # Utilidades (como el watcher de archivos)
│   │   ├── chokidarWatcher.ts
│   ├── index.ts           # Punto de entrada principal del backend
│   ├── app.ts             # Configuración de Express
│   ├── data-source.ts     # Configuración de TypeORM y base de datos
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── database.sqlite        # Base de datos SQLite generada


Ejecuta en la carpeta backend/:

npm init -y
npm install express cors dotenv sqlite3 typeorm reflect-metadata chokidar axios
npm install --save-dev typescript ts-node @types/node @types/express @types/cors



npm install --save-dev jest ts-jest @types/jest typeorm sqlite3
