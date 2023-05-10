const uuid = require('uuid')
const {Dish} = require('../models/models')
const path = require('path')
const ApiError = require('../error/ApiError')
class DishController {
    async create(req, res, next) {
        try{
            const {nameOfDish, description, price, calories, typeDish} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const dish = await Dish.create({nameOfDish, description, price, calories,
                typeDish, img: fileName})
            return res.json(dish)
        } catch (e) {
            next(ApiError.bedRequest(e.message))
        }
    }
    async getAll(req, res) {
        let {dishId, limit, page} = req.query
        page = page || 1
        limit = limit || 2
        let offset = page * limit - limit
        let dish
        if(!dishId){
            dish = await Dish.findAndCountAll({limit, offset})
        }
        if(dishId){
            dish = await Dish.findAndCountAll({where: {dishId}, limit, offset})
        }
        return res.json(dish)
    }
}

module.exports = new DishController()