require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

app.use('/api/users', require('./backend/routes/users'));
app.use('/api/services', require('./backend/routes/services'));
app.use('/api/bookings', require('./backend/routes/bookings'));
app.use('/api/categories', require('./backend/routes/categories'));
app.use('/api/search', require('./backend/routes/search'));
app.use('/api/subservices', require('./backend/routes/subservices'));
app.use('/api/feedbacks', require('./backend/routes/feedback'));
app.use('/api/popularservices', require('./backend/routes/popularservices'));
app.use('/api/servicecard', require('./backend/routes/servicecard'));
app.use('/api/taskers', require('./backend/routes/taskers'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


