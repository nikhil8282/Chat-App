const Chat = require("../models/chatModel");
const Users = require("../models/usersModel");

const getChat = async (req, res) => {
const { userId } = req.body;
  if (!userId) {
    // console.log(req.body);
    return res.status(400).json("user is not found");
  }

  try {
    var isChat = await Chat.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");
    isChat = await Users.populate(isChat, {
      path: "latestMessage.sender",
      select: "name,email,profilePic",
    });
    if (isChat.length) return res.status(200).json(isChat);
    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
    const store = await Chat.create(chatData);
    return getChat(req,res);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllChats = async (req, res) => { 
  try {
    // console.log(req.user);
    var Allchats = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage");
    Allchats = await Users.populate(Allchats, {
      path: "latestMessage.sender",
      select: "name,email,profilePic",
    });
    return res.status(200).json(Allchats);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const createGroup = async (req, res) => {
  try {
    var { members } = req.body;
    if (!members) throw new Error("Members are not selected!");
    members = JSON.parse(req.body.members);
    if (members.length < 2) {
      throw new Error("Please select more than 1 member");
    }
    members.push(req.user._id);
    const result = await Chat.create({
      chatName: "group",
      isGroupChat: true,
      users: members,
      groupAdmin: req.user._id,
    });
    res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = { getChat, getAllChats, createGroup };
