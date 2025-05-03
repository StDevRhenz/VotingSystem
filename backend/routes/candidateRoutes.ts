import express from 'express';
import { getCandidates } from '../controllers/candidateController';

const router = express.Router();

// Route to get candidate data
router.get('/candidates', getCandidates);

export default router;