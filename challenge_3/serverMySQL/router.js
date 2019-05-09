const router = require('express').Router();
const controller = require('./controller');

router.route('/checkout')
  .get(controller.getAll)
  .post(controller.post)
  .delete(controller.deleteAll)

router.route('/checkout/:email')
  .get(controller.getOne)
  .put(controller.updateOne)
  .delete(controller.deleteOne)

module.exports = router;
  