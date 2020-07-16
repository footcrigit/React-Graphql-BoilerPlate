// import { resolvers } from './resolver';
// import {makeExecutableSchema} from 'graphql-tools';
import { ApolloServer } from 'apollo-server-express';
import {resolvers} from './resolver.js';

const typeDefs = `
    
    type Account {
        user_id : ID,
        username : String,
        password : String,
        email : String,
        created_on : String,
        last_login : String
    }
    type Query {
        getAccount: [Account]
        hello : String
        getOneAccount(user_id : ID!) : Account
    }

    input AccountInput{
        user_id : ID,
        username : String,
        password : String,
        email : String,
        created_on : String,
        last_login : String
    }
    type Mutation {
        createAccount(input: AccountInput): String
    }
`;

// const schema = makeExecutableSchema({typeDefs, resolvers});

const SERVER = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: {
      endpoint: `http://localhost:4000/graphql`,
      settings: {
        'editor.theme': 'light'
      }
    }
  });
export default SERVER;
// export { schema };


