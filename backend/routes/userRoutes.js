const express = require('express');
const { login, register, getMe } = require('../controllers/userControllers');

const router = express.Router();

router.post('/login', login);
router.post('/', register);
router.get('/:me', getMe);

module.exports = router;
