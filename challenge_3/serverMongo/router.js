const router = require('express').Router();
const controller = require('./controller');

// Router checking different endpoints
router.route('/checkout')
  .get(controller.getAll)
  .post(controller.createOne)
  .delete(controller.deleteAll);

router.route('/checkout/:email')
  .get(controller.getOne)
  .put(controller.updateOne)
  .delete(controller.deleteOne);

module.exports = router;
