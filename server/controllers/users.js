const express = require('express');

const router = express.Router();

const {register} = require("../register");

const {login} = require("../login");

router.post('/register' , register); //POST request to register the user

router.post('/login' , login); // POST request to login the user

module.exports = router;