import { resolvers } from './resolver';
import {makeExecutableSchema} from 'graphql-tools';

const typeDefs = `
    type Friend  {
        id : ID,
        FirstName : String,
        LastName : String,
        gender : String,
        language : String,
        emails : String,
        contacts : [Contact]
    }
    type Contact {
        FirstName : String
        LastName : String
    }
    type Query {
        getFriend(id : ID) : Friend
    }

    input FriendInput {
        id : ID,
        FirstName : String!
        LastName : String
        gender : String
        language : String
        emails : String
        contacts : [ContactInput]
    }
    input ContactInput {
        FirstName : String
        LastName : String
    }
    type Mutation {
        createFriend(input : FriendInput) : Friend
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };


