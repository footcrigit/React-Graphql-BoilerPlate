import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache,ApolloProvider,gql } from '@apollo/client';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from './component/HomeComponent';



const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       query ContactsQuery {
//         getAccount {
//           user_id
//           username
//           email
//         }
//       }
//     `
//   })
//   .then(result => console.log('spatra',result));


function App(props) {
  return (
    <ApolloProvider client={client}>
      <div >
        <Router>
          <Switch>
              <Route path="/">
                <HomeComponent {...props} />
              </Route>
              
            </Switch>
          </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
