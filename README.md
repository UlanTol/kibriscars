# kibriscars
#my projects

TS, React, Redux Toolkit, Docker, Nginx, NestJS, GraphQl, TypeORM

https://ulantol.github.io/kibriscars/ 
the backend does not run in server!

# Сonfiguration API

Сreate file **.env** path **services/kibris-cars-app** \
Full path - **services/kibris-cars-app/.env**

# WEB SITE SETTINGS

inside .env

PORT=9000
DB_NAME=kibriscars
DB_USER=root
DB_PASS=Ulan101010

# Сonfiguration front end

Сreate file **.env** path **services/misland** \
Full path - **services/misland/.env**

inside .env

REACT_APP_API_URL=http://localhost:9000

# Launching API

```
cd services/kibris-cars-app
docker compose up --build
```

**Change sites**

# Launching React

```
cd services/misland
docker compose up --build
```

**React link** - http://127.0.0.1:3000/
**NestJs link** - http://127.0.0.1:9000/

# Local development

**backend**
npm run start:dev

**backend**
npm start

**GraphQL**

http://localhost:9000/graphql

Goodluck)
