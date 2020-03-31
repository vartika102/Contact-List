// Routes are basically for get, put, post, delete, etc. requests to the server
const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retrieving data
router.get('/contacts', (req, res, next)=>{ // takes /api/contacts
	//res.send('Retreive the contact list');
	//here the logic to retrieve data from database needs to be written
	Contact.find(function(err, contacts) {
		res.json(contacts);
	})
});

//add contact
router.post('/contact', (req, res, next)=>{
	//logic to add contact
	let newContact = new Contact({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		phone: req.body.phone
	});
	//insert new contact into db
	newContact.save((err, contact)=>{
		if(err)
		{
			res.json({msg: 'failed to add contact'});
		}
		else{
			res.json({msg: 'contact added successfully'});
		}
	})
});

//delete contacts
router.delete('/contact/:id', (req, res, next)=>{ // refering a particular contact by its id
	//logic to delete contact
	Contact.remove({_id: req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});

//export the router
module.exports = router;

//while inserting mongodb creates a new id for each contact