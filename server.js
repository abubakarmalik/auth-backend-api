const express = require('express');
const cors = require('cors');
const connectDB = require('./config/Connection');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

require('dotenv').config();
connectDB();

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://custom-auth-client.netlify.app',
};
app.use(cors(corsOptions));

app.use('/', (req, res) => {
  res.json({ message: 'Auth APi' });
});
app.use('/api/', userRoutes);
app.use('/api/', dashboardRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on  http://localhost:${port}/`);
});
