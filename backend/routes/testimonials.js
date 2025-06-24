const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/testimonials');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Only allow testimonialPhoto field
        if (file.fieldname === 'testimonialPhoto') {
            if (file.mimetype.startsWith('image/')) {
                cb(null, true);
            } else {
                cb(new Error('Only image files are allowed for testimonial photos'));
            }
        } else {
            cb(new Error('Unexpected field name'));
        }
    }
});

// Create a single file upload handler for testimonials
const uploadSingle = upload.single('testimonialPhoto');

// Get all testimonials
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 });
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new testimonial
router.post('/', upload.single('testimonialPhoto'), async (req, res) => {
    console.log('[Testimonial Upload] req.body:', req.body);
    console.log('[Testimonial Upload] req.file:', req.file);
    const testimonial = new Testimonial({
        name: req.body.name,
        content: req.body.content,
        imageUrl: `/uploads/testimonials/${req.file?.filename || ''}`,
        rating: req.body.rating || 5 // Default to 5 if not provided
    });

    try {
        const newTestimonial = await testimonial.save();
        res.status(201).json(newTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update testimonial
router.put('/:id', upload.single('testimonialPhoto'), async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        if (req.file) {
            testimonial.imageUrl = `/uploads/testimonials/${req.file?.filename || testimonial.imageUrl}`;
        }

        testimonial.name = req.body.name || testimonial.name;
        testimonial.content = req.body.content || testimonial.content;
        testimonial.rating = req.body.rating || testimonial.rating;

        const updatedTestimonial = await testimonial.save();
        res.json(updatedTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete testimonial
router.delete('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        await testimonial.deleteOne();
        res.json({ message: 'Testimonial deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
