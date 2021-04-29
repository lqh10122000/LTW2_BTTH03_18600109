// const user = [{
//     name  : 'Quang Huy',
//     id : '1',
//     username : '18600109',
//     password : 'kocopass',
// }]

// exports.findUsername = function (username)
// {
//     return user.find(u => u.username === username);
// }

// exports.findPassword = function(password)
// {
//     return user.find(u => u.password === password);
// }

const { Sequelize, DataTypes } = require("sequelize");

// const { Sequelize } = require('sequelize');

const db = require("./db");

dbEvents = new Sequelize(
  "postgres://postgres:lqh2962000@localhost:5432/LTW2_TH"
);

const User = db.define("UserTH_LTW2", {
  // Model attributes are defined here
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.CreateUser = async function (Fullname, email, Password) {
  await User.create({
    fullname: `${Fullname}`,
    email: `${email}`,
    password: `${Password}`,
  });
};

// const User = [{
//     id : 1,
//     Name: 'Quang Huy',
//     email: '18600109',
//     password: 'kocopass'
// }];

User.findByEmail = async function (email) {
  // await User.create({
  //     fullname : `${}`,
  //     email : '18600109',
  //     password : 'kocopass'
  // });
  console.log("in find by username " + email);

  return User.findOne({
    where: {
      email,
    },
  });
};

User.getAllEvents = async function () {
  allData = await dbEvents.query('select * from public."UserTH_LTW2s"');
  return allData;
  // return User.findAll({
  //     raw: true,
  // });
};

User.findById = async function (id) {
  return User.findByPk(id);
};

module.exports = User;
