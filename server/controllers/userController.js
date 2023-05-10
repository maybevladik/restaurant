const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require("../models/models");

const generateJWT = (userId, mail, role) =>{
    return jwt.sign(
        {userId, mail, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async registration(req, res, next) {
        const {mail, password, role} = req.body
        if(!mail || !password) {
            return next(ApiError.bedRequest('Некоректний email або пароль'))
        }
        const candidate = await User.findOne({where: {mail}})
        if(candidate){
            return next(ApiError.bedRequest('Користувач з таким email вже існує'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const regUser = await User.create({mail, password: hashPassword, role})
        const token = generateJWT(regUser.userId, regUser.mail, regUser.role)
        return res.json({token})
    }
    async login(req, res, next) {
        const {mail, password} = req.body
        const user = await User.findOne({where: {mail}})
        if (!user){
            return next(ApiError.internal('Користувач не знайдений'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Вказано невірний пароль'))
        }
        const token = generateJWT(user.userId, user.mail, user.role)
        return res.json({token})
    }
    async check(req, res, next) {
        const token = generateJWT(req.user.userId, req.user.mail, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()