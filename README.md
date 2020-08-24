<img src='https://github.com/ljlm0402/typescript-nest-starter/raw/images/logo.jpg' border='0' alt='logo' />

[NestJs](https://www.npmjs.com/package/@nestjs/cli) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

<a href="https://www.npmjs.com/package/typescript-nest-starter" target="_blank"><img src="https://img.shields.io/npm/v/typescript-nest-starter.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/typescript-nest-starter" target="_blank"><img src="https://img.shields.io/npm/l/typescript-nest-starter.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/typescript-nest-starter" target="_blank"><img src="https://img.shields.io/npm/dm/typescript-nest-starter.svg" alt="NPM Downloads" /></a>

<br />

## 🤔 What is Nest ?

nestjs is A progressive [Node.js](https://nodejs.org/en/) framework for building efficient and scalable server-side applications, heavily inspired by [Angular](https://angular.io/).

## 🤔 Why typescript-nest-starter?

[Nest (NestJS)](https://nestjs.com/) is a framework for building efficient, scalable [Node.js](https://nodejs.org/en/) server-side applications. It uses progressive JavaScript, is built with and fully supports [TypeScript](https://www.typescriptlang.org/) (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This allows developers the freedom to use the myriad of third-party modules which are available for the underlying platform.

## 🚀 Quick Start

### Install with the npm global package

```sh
$ npm install -g typescript-nest-starter
```

### Run npx to install the package

<<<<<<< HEAD
npx is a tool in the JavaScript package management module, npm.
=======
The quickest way to get started is use npx and pass in the name of the project you want to create.
If you don't specify a project name, the default _typescript-nest-starter_ will be used instead.
>>>>>>> master

This is a tool that allows you to run the npm package on a single run without installing the package.

If you do not enter a project name, it defaults to _typescript-nestjs-starter_.

```bash
$ npx typescript-nest-starter "project name"
```

<<<<<<< HEAD
Choose the template you want. We will create more templates later.

Start your typescript-nestjs-starter app in development mode at `http://localhost:3000/`
=======
Start your typescript-nest-starter app in development mode at `http://localhost:3000/`
>>>>>>> master

```bash
$ cd "project name" && npm run start
```

## 🎠 Available commands for the server.

- Run the Server in production mode : `npm run start`.
- Run the Server in development mode : `npm run dev`.
- Run all unit-tests: `npm run test`.
- Check for linting errors: `npm run lint`.

## ⛑ Code Structure (default)

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

## 💳 License

[MIT](LICENSE)

## 🤝 Contributors
