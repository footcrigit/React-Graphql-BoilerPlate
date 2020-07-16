import Sequelize from 'sequelize';

const sequelize = new Sequelize('graphreactapp', 'devuser', 'local123', {
    dialect: 'postgres',
    host : 'localhost',
});
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


const Account = sequelize.define('account', {
    user_id: { type: Sequelize.INTEGER },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    created_on: { type: Sequelize.DATE },
    last_login: { type: Sequelize.DATE },
},
{
    freezeTableName: true
});


export {  Account };
