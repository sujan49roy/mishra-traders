const express = require('express');
const router = express.Router();
const Pdf = require('../models/Pdf');
const multer = require('multer');
const path = require('path');

// Multer storage config
// Ensure uploads/pdfs directory exists
const fs = require('fs');
const uploadDir = path.join('uploads', 'pdfs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/pdfs');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('application/pdf')) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  },
});

const uploadSingle = upload.single('pdf');

// GET all PDFs
router.get('/', async (req, res) => {
  try {
    const pdfs = await Pdf.find().sort({ createdAt: -1 });
    res.json(pdfs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST upload a PDF
router.post('/', uploadSingle, async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'PDF file is required' });
  const pdf = new Pdf({ pdfUrl: `/uploads/pdfs/${req.file.filename}` });
  try {
    const saved = await pdf.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a PDF
router.delete('/:id', async (req, res) => {
  try {
    const pdf = await Pdf.findById(req.params.id);
    if (!pdf) return res.status(404).json({ message: 'PDF not found' });
    await pdf.deleteOne();
    res.json({ message: 'PDF deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
