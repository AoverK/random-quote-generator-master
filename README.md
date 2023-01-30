# Random Quote Generator

## Introduction

Your task is to build a backend application that acts as a RESTful API Server for displaying random quotes. 

The application should be written using [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io), and [SQLite](https://www.sqlite.org)

## Getting Started

The NestJS starter code and [quotes file](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) can be found in our random-quote-generator GitHub repository. 
The [NestJS First Steps](https://docs.nestjs.com/first-steps) documents are a great launching point to begin building this.

## What We Expect From You
1. Create an application that creates and uses a RESTful API to retrieve and display a random quote from the given [office-quotes](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) dataset. This application does not need to be deployed or hosted anywhere- just something you can run locally.
2. Add tests to your newly created application.
3. Add any additional feature of your choice.
4. Update the README with any information you want to include that will help us understand and run your project.
5. Upload your completed code to your own Git repository and share it with us.

## Need Help?

Feel free to consult any NestJS or TypeScript documentation as necessary. For any other further questions or issues that arise, reach out to your hiring manager.

## Time Estimate

We expect this to take you 1-2 hours to complete. This isn’t a hard limit- it is just for you to plan your time!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# Testing Resources

[NestJS Testing](https://github.com/jmcdo29/testing-nestjs)
[Jest API Docs](https://jestjs.io/docs/api)
[Testing NestJS Github Repo](https://github.com/jmcdo29/testing-nestjs)

# Postman
Files for external testing of the API using Postman

**Collection File**
`RandomQuoteGenerator.postman_collection.json`

**Environment File**
RandomQuoteGenerator.postman_environment.json

## Features Added
1. Swagger API at /api
2. Postman Collection for External Testing
3. Docker containerization script

## Docker

### Environments
**Development**
This is a 3 stage build process:
1. Use `development -t random-quote-generator-master` to build 
2. Spin up you container
`docker run -p80:3000 random-quote-generator-master`


**Production**
This is a 3 stage build process:
1. Build using `docker build -t random-quote-generator-master` 
2. Then run second stage of build process using `docker production -t random-quote-generator-master`
3. Spin up you container
`docker run -p80:3000 random-quote-generator-master`


# Change log
The change log can be found on the Releases page.

# Authors
NestJS template was provided. Adrian Kennedy has provided additional functionality. 

# License
Unlicensed
