import express from 'express';
import mongoose from 'mongoose';

const Question = mongoose.model('Question');
const router = express.Router();

/* Ping */
function ping(req, res) {
  res.status(200).json({ type: 'ping', status: 'OK' });
}

function createQuestion(req, res) {
  const newQuestion = req.body;
  newQuestion.authorId = '1234';

  const question = new Question(newQuestion);
  question.save(function(err) {
    if (err) res.status(401).json(err);
    else res.status(200).json(question);
  });
}

/* Configure API routes */
router.post('/createquestion', createQuestion);
router.all('/', ping);

module.exports = router;
export default router;
