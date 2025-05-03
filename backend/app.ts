import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import candidateRoutes from './routes/candidateRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', candidateRoutes);

// Default route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Voting System API');
});

export default app;