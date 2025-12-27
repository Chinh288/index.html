
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fix image paths for GitHub Pages
  const fixImagePath = (path: string) => {
    if (path.startsWith('http')) return path;
    return import.meta.env.BASE_URL + path.replace(/^\//, '');
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-lg bg-zinc-100 aspect-video border border-zinc-200"
        onClick={() => setIsModalOpen(true)}
      >
        <img 
          src={fixImagePath(images[currentIndex])} 
          alt={`Evidence ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-95"
        />
        
        {images.length > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevImage}
              className="p-2 rounded-full bg-white/90 shadow-lg text-zinc-900 border border-zinc-200 hover:bg-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextImage}
              className="p-2 rounded-full bg-white/90 shadow-lg text-zinc-900 border border-zinc-200 hover:bg-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

        <div className="absolute bottom-3 right-3 px-2 py-1 bg-zinc-900/10 backdrop-blur-sm border border-black/5 rounded text-[10px] font-mono text-zinc-800">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md p-4 sm:p-12"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={fixImagePath(images[currentIndex])} 
              alt={`Evidence Full ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded border border-zinc-200"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button 
              className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {images.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 -inset-x-20 hidden xl:flex justify-between pointer-events-none">
                <button 
                  onClick={prevImage}
                  className="p-4 rounded-full bg-white shadow-xl border border-zinc-100 text-zinc-900 pointer-events-auto hover:bg-zinc-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="p-4 rounded-full bg-white shadow-xl border border-zinc-100 text-zinc-900 pointer-events-auto hover:bg-zinc-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
