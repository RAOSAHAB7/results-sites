const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'your_secret_key'; // Replace with a secure key

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/satta-results', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema and model for results
const resultSchema = new mongoose.Schema({
  name: String,
  time: String,
  result: String
});
const Result = mongoose.model('Result', resultSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Middleware for authentication
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(403);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Admin login route
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') { // Replace with your admin credentials
    const token = jwt.sign({ username: 'admin' }, SECRET_KEY);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});

// Routes
app.get('/results', async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/results', authenticateToken, async (req, res) => {
  const { name, time, result } = req.body;
  const newResult = new Result({ name, time, result });
  try {
    await newResult.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
