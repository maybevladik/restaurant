const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    userId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    /*name:{type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING},*/
    email: {type: DataTypes.STRING, unique: true},
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

const Type = sequelize.define('type', {
    typeId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true, allowNull: false}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketDish = sequelize.define('basket_dish', {
    typeId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Type.hasMany(Dish)
Dish.belongsTo(Type)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketDish)
BasketDish.belongsTo(Basket)

Dish.hasMany(BasketDish)
BasketDish.belongsTo(Dish)

module.exports = {
    User,
    Dish,
    Type,
    Basket,
    BasketDish
}