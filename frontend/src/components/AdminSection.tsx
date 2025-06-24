import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Upload, Loader2 } from "lucide-react";

/**
 * Admin section component that integrates with the backend API endpoints
 * Handles file uploads for gallery, products, price PDFs, and testimonials
 */
const AdminSection = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [uploadType, setUploadType] = useState<'gallery' | 'pdf' | 'catalog' | 'testimonial'>('gallery');
  const [uploading, setUploading] = useState(false);

  // Gallery
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryDescription, setGalleryDescription] = useState('');

  // Product (Catalog)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  // Price
  const [priceTitle, setPriceTitle] = useState('');
  const [priceDescription, setPriceDescription] = useState('');
  const [priceCategory, setPriceCategory] = useState('');

  // Testimonial
  const [testimonialName, setTestimonialName] = useState('');
  const [testimonialContent, setTestimonialContent] = useState('');
  const [testimonialText, setTestimonialText] = useState('');
  const [testimonialPhoto, setTestimonialPhoto] = useState<File | null>(null);

  // Reset file states when upload type changes
  useEffect(() => {
    if (uploadType === 'testimonial') {
      setFile(null);
    } else {
      setTestimonialPhoto(null);
    }
  }, [uploadType]);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Handle testimonial photo selection
  const handleTestimonialPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTestimonialPhoto(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData();
    
    try {
      let endpoint = '';
      let successMessage = '';

      switch (uploadType) {
        case 'gallery':
          if (!file) throw new Error('Please select an image');
          if (!galleryTitle || !galleryDescription) throw new Error('Title and description are required');
          
          formData.append('image', file);
          formData.append('title', galleryTitle);
          formData.append('description', galleryDescription);
          endpoint = '/api/gallery';
          successMessage = 'Gallery item uploaded successfully';
          break;

        case 'catalog':
          if (!file) throw new Error('Please select an image');
          if (!name || !description || !price || !category || !stock) 
            throw new Error('All product fields are required');
          
          formData.append('image', file);
          formData.append('name', name);
          formData.append('description', description);
          formData.append('price', price);
          formData.append('category', category);
          formData.append('stock', stock);
          endpoint = '/api/products';
          successMessage = 'Product added successfully';
          break;

        case 'pdf':
          if (!file) throw new Error('Please select a PDF file');
          formData.append('pdf', file);
          endpoint = '/api/pdfs';
          successMessage = 'PDF uploaded successfully';
          break;

        case 'testimonial':
          if (!testimonialPhoto) throw new Error('Please select a photo');
          if (!testimonialName || !testimonialContent) 
            throw new Error('Name and testimonial content are required');
          
          formData.append('testimonialPhoto', testimonialPhoto);
          formData.append('name', testimonialName);
          formData.append('content', testimonialContent);
          if (testimonialText) formData.append('text', testimonialText);
          endpoint = '/api/testimonials';
          successMessage = 'Testimonial added successfully';
          break;
      }

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header, let the browser set it with the correct boundary
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch (error) {
        console.error('Failed to parse JSON response:', error);
        throw new Error('Failed to process server response');
      }

      if (!response.ok) {
        throw new Error(responseData.message || 'Upload failed');
      }

      // Reset form
      setFile(null);
      setTestimonialPhoto(null);
      setGalleryTitle('');
      setGalleryDescription('');
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setStock('');
      setPriceTitle('');
      setPriceDescription('');
      setPriceCategory('');
      setTestimonialName('');
      setTestimonialContent('');
      setTestimonialText('');

      toast({
        title: 'Success',
        description: successMessage,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Upload failed',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  // Render file input based on upload type
  const renderFileInput = () => {
    if (uploadType === 'testimonial') {
      return (
        <div className="space-y-2">
          <label className="block text-sm font-medium">Testimonial Photo</label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleTestimonialPhotoChange}
            disabled={uploading}
            required
          />
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          {uploadType === 'pdf' ? 'PDF File' : 'Image'}
        </label>
        <Input
          type="file"
          accept={uploadType === 'pdf' ? '.pdf' : 'image/*'}
          onChange={handleFileChange}
          disabled={uploading}
          required
        />
      </div>
    );
  };

  // Render form fields based on upload type
  const renderFormFields = () => {
    switch (uploadType) {
      case 'gallery':
        return (
          <>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Title</label>
              <Input
                value={galleryTitle}
                onChange={(e) => setGalleryTitle(e.target.value)}
                placeholder="Enter title"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Description</label>
              <Textarea
                value={galleryDescription}
                onChange={(e) => setGalleryDescription(e.target.value)}
                placeholder="Enter description"
                required
              />
            </div>
          </>
        );

      case 'catalog':
        return (
          <>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Product Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Description</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Price (NPR)</label>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Stock</label>
                <Input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Enter stock quantity"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Category</label>
              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category"
                required
              />
            </div>
          </>
        );

      case 'pdf':
        return null;

      case 'testimonial':
        return (
          <>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Name</label>
              <Input
                value={testimonialName}
                onChange={(e) => setTestimonialName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Testimonial</label>
              <Textarea
                value={testimonialContent}
                onChange={(e) => setTestimonialContent(e.target.value)}
                placeholder="Share your experience"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Additional Text (Optional)</label>
              <Textarea
                value={testimonialText}
                onChange={(e) => setTestimonialText(e.target.value)}
                placeholder="Any additional comments"
              />
            </div>
          </>
        );
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
            <p className="text-gray-500">Upload new content to the website</p>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {['gallery', 'catalog', 'pdf', 'testimonial'].map((type) => (
                <Button
                  key={type}
                  variant={uploadType === type ? 'default' : 'outline'}
                  onClick={() => setUploadType(type as any)}
                  className="capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFileInput()}
              
              <div className="space-y-4">
                {renderFormFields()}
              </div>

              <Button type="submit" className="w-full" disabled={uploading}>
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  `Upload ${uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}`
                )}
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminSection;