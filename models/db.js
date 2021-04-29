const { Sequelize } = require('sequelize');
module.exports = new Sequelize('postgres://postgres:lqh2962000@localhost:5432/LTW2_TH');


// (async function()
// {
//     try
//     {
//         await sequelize.authenticate();
//         console.log('connection has been estableished successfully');
    
//           await sequelize.sync();  
//     }
//     catch (error)
//     {
//         console.error('Unable to connect to the database ', error);
//     }
// })().catch(console.error);

