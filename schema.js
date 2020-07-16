import { resolvers } from './resolver';
import {makeExecutableSchema} from 'graphql-tools';

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

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };


