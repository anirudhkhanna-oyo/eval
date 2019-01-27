const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  competencies: {
    type: [String],
    default: []
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  authorId: {
    type: String,
    required: true
  }
});

mongoose.model('Question', questionSchema);
console.log('Schema registered: Question');
