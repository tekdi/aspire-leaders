# Pratham 2.0

## Host App

### learner-app

Next JS, run:

```sh
nx dev learner-app --port=3001 --verbose
```

### admin-app

Next JS, run:

```sh
nx dev admin-app --port=3002 --verbose
```

##

## Micro Frontend List

### authentication

Next JS, run:

```sh
nx dev authentication --port=4101 --verbose
```

basePath : `http://localhost:4101/authentication/`
Port : `4101`

### forget-password

Next JS, run:

````sh
nx dev forget-password --port=4109 --verbose
```

basePath : `http://localhost:4109`
Port : `4109`


## NX Command

### View Nx Graph

` nx graph`

### Build All Project

`npx nx run-many --target=build --all`

### Install NX Globally

`npm install -g nx`

## Notes

## use shared library in any project

```sh
import { SharedLib } from '@shared-lib';
````
