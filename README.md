# money-tracker
[![CircleCI](https://circleci.com/gh/kawakawaryuryu/money-tracker.svg?style=svg)](https://circleci.com/gh/kawakawaryuryu/money-tracker)
## setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn test
```

### Lints and fixes files
```bash
# only lint
yarn lint

# lint adn fix files
yarn lintfix
```

## How to create OpenAPI stub server
### with OpenAPI Generator
```
openapi-generator generate -i openapi.yml -g spring -o swagger
```

### with Prism
```bash
# install
yarn global add @stoplight/prism-cli

# run mock server with port 3000
prism mock -p 3000 openapi.yml
```
- [Prism | stoplightio/prism | Stoplight](https://stoplight.io/p/docs/gh/stoplightio/prism/README.md)
