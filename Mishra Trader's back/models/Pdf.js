const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  pdfUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pdf', pdfSchema);
