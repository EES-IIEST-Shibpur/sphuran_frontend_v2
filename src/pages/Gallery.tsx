import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GALLERY_IMAGES } from '@/lib/assets';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : GALLERY_IMAGES.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! < GALLERY_IMAGES.length - 1 ? prev! + 1 : 0));
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      handlePrevious(e as any);
    } else if (e.key === 'ArrowRight') {
      handleNext(e as any);
    }
  };

  useState(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <>
      <SEO
        title="Gallery - SPHURAN 4.0"
        description="Explore the vibrant memories of SPHURAN 4.0 - The Annual Technical Festival of Electrical Engineering Society, IIEST Shibpur. View event highlights, workshops, competitions, and celebrations."
        keywords="SPHURAN gallery, SPHURAN photos, technical fest gallery, IIEST events, electrical engineering festival, SPHURAN 4.0 images, EES IIEST gallery"
        url="https://sphuran.eesiiests.org/gallery"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto max-w-7xl">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Gallery' }
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
                Gallery
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Relive the moments, memories, and magic of SPHURAN 4.0
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {GALLERY_IMAGES.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted"
                  onClick={() => setSelectedImage(index)}
                >
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-muted-foreground animate-pulse" />
                    </div>
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [index]: true }))}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    } group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-white font-medium text-sm md:text-base px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {image.title}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-[102] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 z-[102] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-[102] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <motion.div
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_IMAGES[selectedImage].src}
                  alt={GALLERY_IMAGES[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-white font-semibold text-lg">
                    {GALLERY_IMAGES[selectedImage].title}
                  </p>
                  {GALLERY_IMAGES[selectedImage].description && (
                    <p className="text-white/80 text-sm mt-1">
                      {GALLERY_IMAGES[selectedImage].description}
                    </p>
                  )}
                  <p className="text-white/60 text-xs mt-2">
                    {selectedImage + 1} / {GALLERY_IMAGES.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
