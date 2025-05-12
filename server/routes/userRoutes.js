import express from "express";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../middleware/protect.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// @route POST /api/users/register
router.post("/register", async (req, res) => {
  console.log("made it to user register");
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "User already exists" });

  const user = await User.create({ name, email, password });
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});

// @route POST /api/users/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// @route GET /api/users/profile
router.get(
  "/profile",
  /*protect,*/ async (req, res) => {
    console.log("made it to profile");

    res.json(req.user);
  }
);

export default router;
