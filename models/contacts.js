//This file will have all the contact schema
const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	phone:{
		type: String,
		required: true
	},
}); // this is a function where schema for the contact is passed

//export the schema
const Contact = module.exports = mongoose.model('Contact', ContactSchema);