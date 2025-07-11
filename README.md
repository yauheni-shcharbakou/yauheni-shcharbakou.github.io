# yauheni-shcharbakou.github.io

Website

## Requirements

- Node.js 22+
- Installed yarn 1.22.22

## Environment variables

Deployment uses `GITHUB_CI` and `CI` variables for check is it a CI. If it's CI - build will be in `export` mode.

Place variables in `.env` file at the root of repository

- 

## Installation

Clone the repository

```shell
git clone git@github.com:yauheni-shcharbakou/yauheni-shcharbakou.github.io.git // via SSH
git clone https://github.com/yauheni-shcharbakou/yauheni-shcharbakou.github.io.git via HTTPS
```

Go to the repository folder

```bash
cd yauheni-shcharbakou.github.io
```

Install dependencies

```bash
yarn install
```

## Usage

For run in development mode:

```shell
yarn dev
```

Build project:

```shell
yarn build
```

For run in production mode (need to build before):

```shell
yarn start
```

Lint with eslint:

```shell
yarn lint
```

## Deployment

For deploy app to GitHub Pages run:

```shell
yarn deploy
```

[Deployment link](https://yauheni-shcharbakou.github.io)
