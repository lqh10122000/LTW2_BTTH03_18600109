const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

dbEvents = new Sequelize(
  "postgres://postgres:lqh2962000@localhost:5432/LTW2_TH"
);

const Events = db.define("Events", {
  nameEvent: {
    type: DataTypes.STRING,
    allnulls: false,
  },
  shortDescription: {
    type: DataTypes.STRING,
    allnulls: true,
  },
  longDescription: {
    type: DataTypes.STRING,
    allnulls: true,
  },
  Time: {
    type: DataTypes.DATE,
    allnulls: true,
  },
});

console.log("da vao trong event");

Events.getAllEvents = async function () {
  const allEvents = dbEvents.query('select * from public."Events"');
  return allEvents;
};

module.exports = Events;
