const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    userId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    /*name:{type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING},*/
    mail: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})
const Dish = sequelize.define('dish', {
    dishId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nameOfDish:{type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT},
    calories: {type: DataTypes.FLOAT},
    typeDish: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    User,
    Dish
}