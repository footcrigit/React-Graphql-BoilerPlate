import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';

const app = express();

app.get('/', (req,resp) => {
    resp.send('graph ql is amizing');
})


app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql: true,
}));


app.listen(8080, () => console.log("rutrn server on port 8080/graphql"));
