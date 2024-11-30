require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./backend/routes/users');
const serviceRoutes = require('./backend/routes/services');
const bookingRoutes = require('./backend/routes/bookings');
const reviewRoutes = require('./backend/routes/reviews');
const categoryRoutes = require('./backend/routes/categories');
const searchRoutes = require('./backend/routes/search');
const subserviceRoutes = require('./backend/routes/subservices');

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("Failed to connect to MongoDB:", error));

app.get('/', (req, res) => {
  res.send('Hello, MERN Stack!');
});

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/subservices', subserviceRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
