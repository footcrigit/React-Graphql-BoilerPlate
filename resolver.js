import { Account } from './dbConnectors';
export const resolvers = { 
    Query : {
        getAccount : () => {
            return Account.findAll();
        },
        hello : () => {
            return "hello there"
        },
        getOneAccount: async (root, { user_id }) => {
            let resp = await Account.findAll({where : { user_id : user_id}})
            let account = resp[0]
            if (account)
                return account.dataValues
            else{
                return "Not found"
            }
        },
    },
    Mutation : {
        createAccount : (root, {input}) => {
            return new Promise ((resolve,object) => {
                Account.create({
                    user_id : input.user_id,
                    username : input.username,
                    password : input.password,
                    email : input.email,
                    created_on : input.created_on,
                    last_login : input.last_login
                })
                resolve("Insert Successfull!")
            })
        }
    }
};
