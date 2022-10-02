# Arat
Spontaneous Events Calendar for Manila, Philippines

## Tech Stack
- arat_api: Elixir, Phoenix Framework
- arat_web: Typescript, NuxtJS
- development: Docker
- production: Google Cloud

## Development
1. Clone the repository.
2. Set the environment files
```
$ cd Projects/arat
$ cp arat_api/.env.sample arat_api/.env
$ cp arat_web/.env.sample arat_web/.env
```

3. Initialize the environment
```
$ docker-compose up api-init
```

4. Run the whole environment
```
$ docker-compose up -d
```
