const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middlewares/auth.middleware');
const mapsController = require('../Controllers/Maps.Controller')

router.get('/get-coordinates',authMiddleware.authUser, mapsController);