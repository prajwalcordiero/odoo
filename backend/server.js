require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

mongoose.connect(process.env.MONGO_URI);

// --- MODELS ---

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

// FIXED: Added the Trip Schema and Model
const tripSchema = new mongoose.Schema({
  tripName: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  userEmail: { type: String, required: true } 
});

const Trip = mongoose.model('Trip', tripSchema);

// --- ROUTES ---

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

// FIXED: Consolidated into one proper POST route
app.post('/api/trips', async (req, res) => {
  try {
    const { tripName, destination, startDate, endDate, userEmail } = req.body;
    const newTrip = new Trip({ tripName, destination, startDate, endDate, userEmail });
    await newTrip.save();
    res.status(201).json({ success: true, trip: newTrip });
  } catch (error) {
    console.error("Save Error:", error);
    res.status(500).json({ success: false, message: "Failed to save trip" });
  }
});

// FIXED: Proper GET route to fetch trips by email
app.get('/api/trips/:email', async (req, res) => {
  try {
    const trips = await Trip.find({ userEmail: req.params.email });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching trips" });
  }
});

app.listen(process.env.PORT, () => console.log(`Running on ${process.env.PORT}`));