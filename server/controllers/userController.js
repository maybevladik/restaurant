const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require("../models/models");

const generateJWT = (userId, email, role) =>{
    return jwt.sign(
        {userId, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.bedRequest('Некоректний email або пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.bedRequest('Користувач з таким email вже існує'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const regUser = await User.create({email, password: hashPassword, role})
        const token = generateJWT(regUser.userId, regUser.email, regUser.role)
        return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user){
            return next(ApiError.internal('Користувач не знайдений'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Вказано невірний пароль'))
        }
        const token = generateJWT(user.userId, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next) {
        const token = generateJWT(req.user.userId, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()