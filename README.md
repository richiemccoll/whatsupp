## Whatsupp

### A Whatsapp clone.

#### But.. why?

I wanted to use this as a demo project to get familiar with tools in the ecosystem that I wouldn't neccessarily get to use day to day. These include:

- Apollo (and GraphQL in general)
- React hooks
- React Suspense (concurrent)
- TypeScript

### How to run the project?

1. `git clone git@github.com:richiemccoll/whatsupp.git`
2. `npm i`
3. `npm start`

Running start in the root directory will kick off the client and server applications using `concurrently`.
Any changes in the client will update automagically with hot module reloading. On the server, I'm using `ts-node-dev` to watch for any changes, however server changes require a browser refresh :anguished:

TODO

- Add screenshot / gif of the application.
