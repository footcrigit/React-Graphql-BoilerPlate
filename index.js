// import express from 'express';
// import bodyParser from 'body-parser';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import cors from 'cors';
// import { schema } from './schema';

// const myGraphQLSchema = schema;
// const PORT = 4000;
// const server = express();

// server.use('*', cors({ origin: 'http://localhost:3000'}));

// server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema}));
// server.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql'}));

// server.listen(PORT, () =>
//   console.log(`Your GraphQL server is running on port ${PORT}`)
// );

// Imports: Express
import express from 'express';
import cors from 'cors';
const APP = express();
// Imports: GraphQL
import SERVER from './schema.js';
// Middleware: GraphQL
  SERVER.applyMiddleware({
  app: APP
});
// Express: Port
const PORT = 4000 || process.env;
// Express: Listener
APP.use('*', cors({ origin: 'http://localhost:3000'}));
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
// Exports
export default APP;