## Focus on Testing for the development environment
The purpose of this project is to establish a better JS testing experience. This is a evolved version of my [Cypress-unit repo][be0b3d00]

  [be0b3d00]: https://github.com/xxerror500xx/Cypress-unit-test-build "Using cypress for integration and unit testing."
During my exploration of cypress I found that although you can have unit tests within cypress. It is currently as of this writing (04/30/2018), more useful to just use mocha for testing. Cypress is built on mocha so this project is meant to compliment Cypress integration testing.

###### Install
  - nvm (optional)
  - install node.js
  - install npm
  - clone this repo
  - cd /this/repo
  - npm install

###### Config

###### Workflow testing commands
1. Build from src
  1. Dev
    - `npm run build`
  2. Prod


1. Testing
  1. Unit
    - `npm run test`
    - `npm run test-cover` (provides unit test code coverage data to terminal)

  2. Integration (Starts the Dev server and opens it within the default browser. Must be run before starting Cypress in a new terminal.)
    1. `npm run start`
    2. `npm run cypress:open`

###### Stack
- Node.js (Base of js reality)
- NVM (Manages all node versions)
- NPM (manages all package versions)
- Webpack (Magic runner, tasker, builder)
- Webpack-dev-server (Generates a Development server for rapid development)
- clean-webpack-plugin (Cleans dist dir before build process)
- html-webpack-plugin (Generates index.html with appropriate scripts)
- Cypress (Integration, E2E)
- Mocha (Unit testing)
- Chai (adds expect testing terminology)
- Istanbul (reporting on unit test coverage)
- Babel (ES6 transpiler)

###### Code test patterns implemented
- Unit testing
- Integration testing

###### Code patterns implemented
- ES2015 modules

###### Code examples included
- Hello world!
- fizzbuzz
- Very basic math
