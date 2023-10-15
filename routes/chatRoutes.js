const express = require("express");
const { getChat, getAllChats, createGroup } = require("../controllers/chatController");
const protectMiddleware = require("../middlewares/protectMiddleware");
const router = express.Router();
router.route('/')
.post(protectMiddleware,getChat).get(protectMiddleware,getAllChats);
router.route('/group').post(protectMiddleware,createGroup);
module.exports=router;