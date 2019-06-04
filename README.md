# Typescript Microservice Boilerplate


## Requirements

* Docker
* Postgresql ~= 10.5

## Install Docker:

From Ubuntu:

```bash
$ curl -sSL https://get.docker.com | sh
```

Docker installer for Mac Os:

Just fetch `Docker-for-mac` installer from this url:

https://download.docker.com/mac/stable/Docker.dmg


## Set up your local project
* Replace `{{ }}` with your local envs

* Create `ormconfig.json` file (***Enviroment variables***)

```
{
  "type": "postgres",
  "host": "{{ db_host }}",
  "port": 5432,
  "username": "{{ db_user }}",
  "password": "{{ db_password }}",
  "database": "{{ db_name }}",
  "synchronize": false,
  "logging": false,
  "entities": [
    "./src/models/**/*.ts"
  ],
  "subscribers": [
    "./src/subscribers/**/*.ts"
  ],
  "migrations": [
    "./src/migrations/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "./src/models",
    "migrationsDir": "./src/migrations",
    "subscribersDir": "./src/subscribers"
  }
}
```

* Replace the `{{ }}` with your database values

* For migrations run:

```bash
$ docker exec -it <docker_id> npx ts-node ./node_modules/.bin/typeorm migration:run
```

