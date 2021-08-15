const path=require('path')
const express= require('express')
const playersController = require('../controllers/player-form')
const router = express.Router();

router.get('/', playersController.getPlayers)
router.get('/addPlayer', playersController.getAddPlayer)
router.post('/Player', playersController.postAddPlayer);
router.get('/search', playersController.postSearchPlayer);
router.get('/:playerId', playersController.getPlayerDetails);



module.exports= router; 