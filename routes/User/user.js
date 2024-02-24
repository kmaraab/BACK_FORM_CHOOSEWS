const express = require("express");
const ctrlUser = require("../../controllers/User/User");

const router = express.Router();

// CRUD de base sur un user
router.post('/new-contact', ctrlUser.contact);
router.get('/', ctrlUser.isOnline);

module.exports = router;