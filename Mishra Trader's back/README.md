# Mishra Traders Admin Backend

This is the backend server for Mishra Traders admin panel, built with Node.js, Express, and MongoDB.

## Features

- Gallery Management
- Product Catalog Management
- Testimonials Management
- Price PDF Management

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your MongoDB connection string:
```
MONGODB_URI=your_mongodb_uri
PORT=5000
```

3. Create upload directories:
```bash
mkdir -p uploads/gallery uploads/products uploads/testimonials uploads/prices
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Gallery
- GET `/api/gallery` - Get all gallery items
- POST `/api/gallery` - Add new gallery item
- PUT `/api/gallery/:id` - Update gallery item
- DELETE `/api/gallery/:id` - Delete gallery item

### Products
- GET `/api/products` - Get all products
- POST `/api/products` - Add new product
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

### Testimonials
- GET `/api/testimonials` - Get all testimonials
- POST `/api/testimonials` - Add new testimonial
- PUT `/api/testimonials/:id` - Update testimonial
- DELETE `/api/testimonials/:id` - Delete testimonial

### Price PDFs
- GET `/api/prices` - Get all price PDFs
- POST `/api/prices` - Add new price PDF
- PUT `/api/prices/:id` - Update price PDF
- DELETE `/api/prices/:id` - Delete price PDF
