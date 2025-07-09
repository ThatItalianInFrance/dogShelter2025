/* 
    Les routes de l'office (sont préfixées par /office) LOL
*/

const { Router } = require('express');
const caniController = require('../controllers/Cani.controller');
const usersController = require('../controllers/Users.controller');
const userCaniController = require('../controllers/UserCani.controller');
const loginController = require('../controllers/Login.controller');
const boxController = require('../controllers/Box.controller');
const kindController = require('../controllers/Kind.controller');
const newsController = require('../controllers/News.controller');
const shelterController = require('../controllers/Shelter.controller');

const stockController = require('../controllers/Stock.controller');
const stockEventsController = require('../controllers/StockEvents.controller');

const DogsBoxController = require('../controllers/DogsBox.controller');

const router = Router();


// CANI Router
router.get('/cani', caniController.getCani);
router.get('/animal/:id', caniController.getCaneId);
router.post('/cane', caniController.postCane);
router.put('/cane/:id', caniController.putCaneId);
router.delete('/cane/:id', caniController.deleteCaneId);

// News Router
router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsController.getNewsId);
router.post('/news', newsController.postNews);
router.put('/news/:id', newsController.putNewsId);
router.delete('/news/:id', newsController.deleteNewsId);

// Shelter Router
router.get('/shelters', shelterController.getAllShelters);
router.get('/shelter/:id', shelterController.getShelterId);
router.post('/shelter', shelterController.postShelter);
router.put('/shelter/:id', shelterController.putShelterId);
router.delete('/shelter/:id', shelterController.deleteShelterId);

// KIND Router
router.get('/kind', kindController.getKinds);
router.get('/kind/:id', kindController.getKindId);
router.post('/kind', kindController.postKind);
router.put('/kind/:id', kindController.putKindId);
router.delete('/kind/:id', kindController.deleteKindId);

// Stock Router
router.get('/stock', stockController.getStock);
router.get('/stock/:id', stockController.getStockId)
router.post('/stock', stockController.postStock);
router.put('/stock/:id', stockController.putStockId);
router.delete('/stock/:id', stockController.deleteStockId);

// StockEvents Router
router.get('/stock_events', stockEventsController.getStockEvents);
router.get('/stock_events/:id', stockEventsController.getStockEventsId)
router.post('/stock_events', stockEventsController.postStockEvents);
router.put('/stock_events/:id', stockEventsController.putStockEventsId);
router.delete('/stock_events/:id', stockEventsController.deleteStockEventsId);

// STALLI Router
router.get('/dogsbox', DogsBoxController.getDogsBox);
router.get('/dogsbox/:id', DogsBoxController.getDogBoxId);
router.post('/dogsbox', DogsBoxController.postCaniBox);
router.put('/dogsbox/:id', DogsBoxController.putCaniBoxId);
router.delete('/dogsbox/:id', DogsBoxController.deleteCaniBoxId);

router.get('/box', boxController.getBox);
router.get('/box/:id', boxController.getBoxId);
router.post('/box', boxController.postBox);
router.put('/box/:id', boxController.putBoxId);
router.delete('/box/:id', boxController.deleteBoxId);

router.get('/users', usersController.getUsers);
router.get('/user/:id', usersController.getUserId);
router.post('/user', usersController.postUser);
router.put('/user/:id', usersController.putUserId);
router.delete('/user/:id', usersController.deleteUserId);

router.get('/userscani', userCaniController.getUsersCani);
// router.get('/utente/:id', userCaniController.getUtenteId);
// router.post('/utente', userCaniController.postUtente);
// router.put('/utente/:id', userCaniController.putUtenteId);
// router.delete('/utente/:id', userCaniController.deleteUtenteId);

router.post('/login', loginController.logUser);
// router.post('/logout', loginController.postLogout);


module.exports = router;
