<img alt='logo' src='https://github.com/ljlm0402/typescript-nestjs-starter/raw/master/typescript-nestjs-starter.jpg' border='0'>

[NestJs](https://www.npmjs.com/package/@nestjs/cli) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

<a href="https://www.npmjs.com/package/typescript-nestjs-starter" target="_blank"><img src="https://img.shields.io/npm/v/typescript-nestjs-starter.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/typescript-nestjs-starter" target="_blank"><img src="https://img.shields.io/npm/l/typescript-nestjs-starter.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/typescript-nestjs-starter" target="_blank"><img src="https://img.shields.io/npm/dm/typescript-nestjs-starter.svg" alt="NPM Downloads" /></a>

<br />

## 🧐 What is it?

nestjs is A progressive [Node.js](https://nodejs.org/en/) framework for building efficient and scalable server-side applications, heavily inspired by [Angular](https://angular.io/).

## 🤔 Why typescript-nestjs-starter?

[Nest (NestJS)](https://nestjs.com/) is a framework for building efficient, scalable [Node.js](https://nodejs.org/en/) server-side applications. It uses progressive JavaScript, is built with and fully supports [TypeScript](https://www.typescriptlang.org/) (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This allows developers the freedom to use the myriad of third-party modules which are available for the underlying platform.



## ⚙️ Installation

```sh
$ npm install -g typescript-nestjs-starter
```

## 🚀 Quick Start

The quickest way to get started is use npx and pass in the name of the project you want to create.
If you don't specify a project name, the default _typescript-nestjs-starter_ will be used instead.

Create the app:

```bash
$ npx typescript-nestjs-starter "project name"
```

Start your typescript-nestjs-starter app in development mode at `http://localhost:3000/`

```bash
$ cd "project name" && npm run start
```

## 🎠 Available commands for the server.

- Run the Server in production mode : `npm run start`.
- Run the Server in development mode : `npm run dev`.
- Run all unit-tests: `npm run test`.
- Check for linting errors: `npm run lint`.

## ⛑ Code Structure

```bash
│
├── /src
│   ├── /app
│   │   └── /users
│   │       ├── /dtos
│   │       │   └── users.dto.ts
│   │       │
│   │       ├── /interfaces
│   │       │   └── users.interface.ts
│   │       │
│   │       ├── /models
│   │       │   └── users.model.ts
│   │       │
│   │       ├── users.controller.spec.ts
│   │       ├── users.controller.ts
│   │       ├── users.module.ts
│   │       └── users.service.ts
│   │
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── /test
│   ├── app-e2e-spec.ts
│   └── jest-e2e.json
│
├── .gitignore
├── .prettierrc
├── jest.config.js
├── nest-cli.json
├── package-lock.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── tslint.json
```

## License

[MIT](LICENSE)