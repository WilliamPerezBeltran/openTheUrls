# Estructura del Proyecto

```bash
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
│   ├── docker-compose.yaml
│── proxy/
│   ├── nginx.conf
│── .env
│── README.md
```

## Descripción de Archivos y Rutas

### Backend (/backend/src/)
- **entities/Title.ts** → Modelo de título (TypeORM)
- **entities/Url.ts** → Modelo de URL (TypeORM)
- **controllers/title.controller.ts** → Lógica para gestionar títulos
- **controllers/url.controller.ts** → Lógica para gestionar URLs
- **services/title.service.ts** → Funciones para manipular títulos
- **services/url.service.ts** → Funciones para manipular URLs
- **routes/title.routes.ts** → Rutas relacionadas con títulos
- **routes/url.routes.ts** → Rutas relacionadas con URLs
- **utils/chokidarWatcher.ts** → Servicio de monitoreo de archivos con Chokidar
- **data-source.ts** → Configuración de TypeORM
- **app.ts** → Configuración de Express.js
- **index.ts** → Punto de entrada del backend

### Frontend (/frontend/src/)
- **components/TitleList.tsx** → Lista de títulos
- **components/UrlList.tsx** → Lista de URLs por título
- **pages/Home.tsx** → Página principal
- **pages/Dashboard.tsx** → Panel de administración
- **services/api.ts** → API para conectar con el backend
- **App.tsx** → Configuración principal de React

### Base de Datos (/database/)
- **docker-compose.yaml** → Configuración de PostgreSQL o SQLite

### Proxy (/proxy/)
- **nginx.conf** → Configuración del servidor Nginx
