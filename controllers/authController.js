const User = require("../models/usersModel");
const { genToken } = require("../config/tokenConfig");
async function signUpHandler(req, res) {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      // console.log("called sign");
      throw new Error("Enter all the  fields!");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("your email is already registered!");
    }

    const newUser = await User.create({ name, email, password });
    res.status(200).json("user signed up successfully");
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
async function loginHandler(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Please enter all the fields!");
    }
    const user = await User.findOne({ email });

    if (!user) throw new Error("Email is not registerd!");
    // console.log(user);
    if (await user.comparePassword(password)){
      // console.log("called");
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
        token: genToken(user._id),
      });
    }
    else throw new Error("Password is incorrect!");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
const getUser = async (req, res) => {
  console.log(req.query);

  const fil = req.query.search
    ?{
        $or: [
          {
            name: { $regex: req.query.search,$options:"i"}
          }
        ]
      }:{};
      try{
        const users = await User.find(fil).find({_id:{$ne:req.user._id}});
        return res.status(200).json(users);
      } catch (error) {
        res.status(400).json(error);
      }
};
module.exports = { signUpHandler,loginHandler,getUser };
