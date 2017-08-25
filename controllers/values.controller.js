//fetch the mongoose model
var Value=require('../models/value.model');

//get all storedv values 
exports.getValues=function(req,res){

	var result={};

	/*
		if there are keys within req.query, then only fetch values of those keys
		or else fetch all values availabele
	*/
	if(!Object.keys(req.query).length==0)
	{
		var keys=req.query.keys.replace(/,/g, " ");
		
		Value.find({}).select(keys+" -_id").then(function(values){

		for(var i=0;i<values.length;i++)
		{
			var obj=values[i].toJSON();
			for (var key in obj) {
			    result[key]=obj[key];
			}
		}
		
		if(!values)
		{
			res.status(404).send("No values to show");
		}
		else
		{
			res.status(200).json(result);
		}

		}).
		catch(function(err){
			if(err) res.status(200).send('No values available');
		});	
	}
	else
	{
		Value.find().select("-expire_at -__v -_id").then(function(values){

		for(var i=0;i<values.length;i++)
		{
			var obj=values[i].toJSON();
			for (var key in obj) {
			    result[key]=obj[key];
			}
		}
		
		if(!values)
		{
			res.status(404).send("No values to show");
		}
		else
		{
			res.status(200).json(result);
		}

		}).
		catch(function(err){
			if(err) res.status(200).send('No values available');
		});
	}
	
};

//store a new or multiple key value pairs in database
exports.createValues=function(req,res){
	console.log("body: "+req.body.Height);
	
    Value.create(req.body).then(function(value){
    	res.status(200).send("values inserted succesfully");
    })
    .catch(function(err){
    	res.status(500).send(err);
    })
};
