const Router = require('express')
const router = new Router()
const dishController = require('../controllers/dishController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), dishController.create)
router.post('/', checkRole('ADMIN'), dishController.delete)
router.get('/', dishController.getAll)
router.get('/:dishId',dishController.getOne)

module.exports = router