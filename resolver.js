class Friend {
    constructor (id , {FirstName,LastName,gender,language,emails, contacts}){
        this.id = id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.gender = gender;
        this.language = language;
        this.emails = emails;
        this.contacts = contacts
    }
}
const FriendDatabse = {}

//resolver map


export const resolvers = { 
    Query : {
        getFriend : (root, { id }) => {
            return new Friend(id, FriendDatabse[id]);
        }
    },
    Mutation : {
        createFriend : (root, { input }) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            FriendDatabse[id] = input;
            return new Friend(id,input)
        },
    },  
};
