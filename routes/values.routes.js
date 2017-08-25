var express=require('express'),
router=express.Router(),
ValuesController=require('../controllers/values.controller');

//route to get values
router.get('/',ValuesController.getValues);

//route to store values
router.post('/',ValuesController.createValues);

module.exports=router;
