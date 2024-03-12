import { User } from "../Schemas/UserSchema.js";
import bcrypt from "bcrypt";
import ErrorHandler from "../Utils/ErrorHandler.js";
import { sendToken } from "../Utils/SendToken.js";

export const createUserbyemail = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHandler("Please Enter all field", 400));

  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("You already have account", 400));
  const bcryptPassword = await bcrypt.hash(password, 10);
  user = await User.create({
    email,
    password: bcryptPassword,
  });
    sendToken(user,res,201,"User Created Successfully")
};
