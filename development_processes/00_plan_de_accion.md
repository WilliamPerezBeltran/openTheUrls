
# Plan de Acción

La aplicación se desarrollará con **React.js** y **TypeScript** para el frontend, y **Express.js** para el backend. Como base de datos se utilizará **PostgreSQL o SQLite3**.

Se empleará **Docker** para facilitar la instalación, y la contenerización incluirá el frontend, backend y bases de datos.

## Contenedores Definidos

| Servicio                | Tecnología                 | Nombre en `docker-compose.yaml` |
|-------------------------|---------------------------|---------------------------------|
| Backend                | Node.js + Express         | `backend`                      |
| Frontend               | React + TypeScript + Nginx | `frontend`                     |
| Base de Datos          | PostgreSQL (o MongoDB)    | `database`                      |
| Proxy Reverso (Opcional) | Nginx                     | `nginx-proxy`                   |

## Monitoreo de Archivos con Chokidar

Se utilizará la librería **Chokidar** para leer y monitorear las carpetas creadas. Esta librería deberá ejecutarse en segundo plano para garantizar su correcto funcionamiento.

Los archivos se leerán desde una carpeta en el sistema de archivos mediante un servicio backend llamado **Watcher**. Este servicio gestionará la relación entre los títulos de las carpetas y las URLs contenidas en ellas.

### Modelos en la Base de Datos

Habrá dos modelos principales:
- **Title**: Representa el nombre del título de la carpeta.
- **URL**: Contiene las URLs asociadas a un título.

La relación entre estos modelos será **uno a muchos**: un título puede contener múltiples URLs.

## Funcionamiento del Watcher

El **Watcher** va ser el servicio principal quien supervisará la creación de nuevas carpetas dentro del sistema de archivos. Cada carpeta deberá tener su propio nombre y contener un archivo llamado **`urls.txt`**. Cuando se detecten nuevas carpetas, el Watcher enviará la información a la base de datos de manera apropiada.

## Creación del Frontend

Una vez que los datos estén almacenados en la base de datos, el siguiente paso será extraer esta información para construir el frontend.

### Ejemplo de la estructura de la carpeta principal:
```bash
carpeta-principal
   ├── buffers 
   │   └── urls.txt 
   ├── build 
   │   └── urls.txt 
   ├── machine-learning 
   │   └── urls.txt 
```


## Frontend

El front-end tendra que hacer las operaciones "crud" para ejercerlas en ambos modelos antes expuestos (title y url)

Cada vez que haya un cambio en la carpeta principal del computador se debe reflejar alterando la web automaticamente por lo tanto se debera ejecutar un deploy automáticamente para que se pueda 
reflejar los cambios hechos en el archivo principal. Es imperativo que las tareas se ejecuten automáticamente.























