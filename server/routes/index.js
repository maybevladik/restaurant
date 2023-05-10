const Router = require('express')
const router = new Router()
const dishRouter = require('./dishRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/dish', dishRouter)

module.exports = router