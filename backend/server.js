const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to your frontend URL
  credentials: true
}));

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
