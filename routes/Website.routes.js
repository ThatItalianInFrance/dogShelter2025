const { Router } = require('express');
const websiteController = require('../controllers/Website.controller');
const loginController = require('../controllers/Login.controller');
const router = Router();
const cors = require("cors");

router.get('/', cors(), websiteController.getHome);
router.get('/login', websiteController.getLogin);
router.get('/dogs/list', websiteController.getDogsList);
router.get('/dog/:id', websiteController.getDogId);
router.get('/dog/visit/:id', websiteController.getVisit);
// router.get('/stalli', websiteController.getBoxList);
router.get('/news', websiteController.getNews);

router.post('/login', loginController.logUser);
module.exports = router;
