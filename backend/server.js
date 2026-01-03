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

<<<<<<< HEAD
=======
// Example Express route to save a trip
app.post('/api/trips', async (req, res) => {
  try {
    const { tripName, destination, startDate, endDate, userEmail } = req.body;
    // Save to your database (MongoDB/PostgreSQL example)
    const newTrip = await Trip.create({ tripName, destination, startDate, endDate, userEmail });
    res.status(201).json({ success: true, trip: newTrip });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to save trip" });
  }
});

// Route to get all trips for a specific user
app.get('/api/trips/:email', async (req, res) => {
  const trips = await Trip.find({ userEmail: req.params.email });
  res.json(trips);
});

app.post('/api/trips', (req, res) => {
    const tripData = req.body;
    // Example: db.collection('trips').insertOne(tripData)...
    res.json({ success: true });
});

>>>>>>> 95b7230 (modified code)
app.listen(process.env.PORT, () => console.log(`Running on ${process.env.PORT}`));