const Router = require('express')
const router = new Router()
const dishRouter = require('./dishRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/dish', dishRouter)
router.use('/type', typeRouter)

module.exports = router