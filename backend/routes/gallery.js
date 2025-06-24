const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/gallery');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Get all gallery items
router.get('/', async (req, res) => {
    try {
        const galleryItems = await Gallery.find().sort({ createdAt: -1 });
        res.json(galleryItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new gallery item
router.post('/', upload.single('image'), async (req, res) => {
    console.log('[Gallery Upload] req.body:', req.body);
    console.log('[Gallery Upload] req.file:', req.file);
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded'
            });
        }

        if (!req.body.title || !req.body.description) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required'
            });
        }

        const galleryItem = new Gallery({
            title: req.body.title,
            description: req.body.description,
            imageUrl: `/uploads/gallery/${req.file.filename}`
        });

        const newGalleryItem = await galleryItem.save();
        console.log(`[Gallery] Created new item: ${newGalleryItem._id}`);
        res.status(201).json({
            success: true,
            data: newGalleryItem
        });
    } catch (err) {
        console.error('[Gallery] Error creating item:', err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
    const galleryItem = new Gallery({
        title: req.body.title,
        description: req.body.description,
        imageUrl: `/uploads/gallery/${req.file.filename}`
    });

    try {
        const newGalleryItem = await galleryItem.save();
        res.status(201).json(newGalleryItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update gallery item
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }

        if (req.file) {
            galleryItem.imageUrl = `/uploads/gallery/${req.file.filename}`;
        }

        galleryItem.title = req.body.title || galleryItem.title;
        galleryItem.description = req.body.description || galleryItem.description;

        const updatedGalleryItem = await galleryItem.save();
        res.json(updatedGalleryItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete gallery item
router.delete('/:id', async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        await galleryItem.deleteOne();
        res.json({ message: 'Gallery item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
