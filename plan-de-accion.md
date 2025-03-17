**Plan de acción:**
La aplicación se va a hacer con React.js con TypeScript, utilizando bases de datos PostgreSQL o SQLite3. El back-end se va a desarrollar en Express.js.

Se va a utilizar Docker para facilitar la instalación, y la contenerización se hará en el front-end, back-end y bases de datos.


**Contenedores Definidos**

| Servicio                | Tecnología                 | Nombre en `docker-compose.yaml` |
|-------------------------|---------------------------|---------------------------------|
| Backend                | Node.js + Express         | `backend`                      |
| Frontend               | React + TypeScript + Nginx | `frontend`                     |
| Base de Datos          | PostgreSQL (o MongoDB)    | `database`                      |
| Proxy Reverso (Opcional) | Nginx                     | `nginx-proxy`                   |

