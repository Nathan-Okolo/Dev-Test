const express = require('express');
const router = new express.Router();
const userController = require('./controller');



router.get('/', userController.list);

router.get('/:id',userController.listOne);

router.post('/', userController.create);

router.put('/:id',userController.update);

router.delete('/:id',userController.deleteOne);

module.exports = router;