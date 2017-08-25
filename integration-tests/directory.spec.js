var supertest=require('supertest');
var should=require('should');
var api=supertest('http://localhost:3000');

describe('values list',()=>{
	

	it('returns a 200 for retrieved values',(done)=>{
		api.get('/values')
		.expect(200,done);
	});
});


describe('value creation',()=>{
	it('returns 200',(done)=>{
		api.post('/values')
		.send({email:'lisa@thesimpsons.com',phoneNumber:'01671143556'})
		.expect(200);
	});
});


