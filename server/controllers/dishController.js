const uuid = require('uuid')
const {Dish, Type} = require('../models/models')
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
        let {typeDish, limit, page} = req.query
        page = page || 1
        limit = limit || 3
        let offset = page * limit - limit
        let dishes
        if(!typeDish){
            dishes = await Dish.findAndCountAll({limit, offset})
        }
        if(typeDish){
            dishes = await Dish.findAndCountAll({where: {typeDish}, limit, offset})
        }
       // return res.json(dish)
      //  const dishes = await Dish.findAll()
        return res.json(dishes)
    }
    async getOne(req, res){
        const {dishId} = req.params
        const dishes = await Dish.findOne({
            where: {dishId}
        },)
        return res.json(dishes)
    }
    async delete(req, res){
        const {nameOfDish} = req.params
        try {
            const dishes = await Dish.destroy({
                where: {nameOfDish}
            })
            if (dishes) {
                return res.json({message: 'Succesful'})
            } else {
                return res.status(404).json({error: 'QQQQQQQQQQQQQQQQQQQQW'})
            }
        } catch (error){
            return res.status(500).json({error: "sorry, error"})
        }
        }
}

module.exports = new DishController()