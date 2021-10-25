const Sequelize = require("sequelize");

const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "./src/backend/databases/database.sqlite"
    });
    

const Crud = sequelize.define("crud", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.NUMBER,
        allowNull: false
      }
});


const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cost: {
        type: Sequelize.NUMBER,
        allowNull: false
      }
});




sequelize
  .sync()
  .then(() =>
    console.log(
      "users table has been successfully created, if one doesn't exist"
    )
  )
  .catch(error => console.log("This error occurred"));


module.exports = {
    Crud: Crud,
    Product: Product
  };



