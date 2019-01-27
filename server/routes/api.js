import express from 'express';

const router = express.Router();

/* Ping */
function ping(req, res) {
  res.status(200).json({ type: 'ping', status: 'OK' });
}

/* Configure API routes */
router.all('/', ping);

export default router;
