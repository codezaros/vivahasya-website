const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Allows us to parse JSON bodies
app.use(cors()); // Allows your React app to talk to this server
app.use('/api/auth', authRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected... vibe check passed."))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('Server is running! 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server sizzling on port ${PORT}`));