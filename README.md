# Socket.IO chat platform

A basic chat platform based on [Socket.IO](https://socket.io/).

Table of contents:

<!-- TOC -->
* [How to use](#how-to-use)
* [Development](#development)
  * [Server](#server)
  * [Client](#client)
* [Licence](#licence)
<!-- TOC -->

## How to use

```shell
$ docker compose up -d
```

Then go to http://localhost:8080

## Development

### Server

```shell
$ cd server

# start the PostgreSQL database
$ docker compose up -d

# start the server
$ npm run dev
```

### Client

```shell
$ cd vue-client

# start the client
$ npm run dev
```

Then go to http://localhost:5173

## Licence

[MIT](./LICENSE)