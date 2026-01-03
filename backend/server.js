require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: String,
  city: String,
  country: String,
  additionalInfo: String
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ success: true, user: { firstName: user.firstName, email: user.email } });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.listen(process.env.PORT, () => console.log(`Running on ${process.env.PORT}`));