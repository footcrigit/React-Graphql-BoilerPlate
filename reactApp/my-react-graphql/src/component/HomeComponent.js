import React from 'react';
import { Table } from 'semantic-ui-react'
import '../style/HomeComponent.css';
import { useQuery, gql } from '@apollo/client';

const AccountListQuery = gql`
  query ContactsQuery {
    getAccount {
      user_id
      username
      email
    }
  }
`;

// const AccountListQuery = gql `
//   query ContactQuery($uid : ID!){
//     getOneAccount(user_id : $uid){
//       user_id
//       username
//     }
//   }
// `

function HomeComponent(props){
  var uid = 1;
    const { loading, error, data } = useQuery(AccountListQuery, {
      variables : {uid},
    });
    
    if (loading) {
        return <p>Loading...</p>
      }
      if (error) {
        return <p>{error.message}</p>
      }
      // console.log('spatar in component : ', data.getOneAccount);
    return (
        <div className = "Maincontainer">
            <div className = "TableContainer">
                <Table stackable>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>USER ID</Table.HeaderCell>
                    <Table.HeaderCell>NAME</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>E-MAIL</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {
                        data.getAccount.map((item) => (
                            <Table.Row>
                                <Table.Cell>{item.user_id}</Table.Cell>
                                <Table.Cell>{item.username}</Table.Cell>
                                <Table.Cell textAlign='right'>{item.email}</Table.Cell>
                            </Table.Row>
                        ))
                        
                    }
                </Table.Body>
            </Table>
      </div>
      </div>
    )
}

export default HomeComponent;
