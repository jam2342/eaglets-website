
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ImageItem {
  id: string;
  name: string;
  url: string;
  album: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState('Winter Camp');
  const [selected, setSelected] = useState<ImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [sortNewest, setSortNewest] = useState(true);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load images:', err);
        setLoading(false);
      });
  }, []);

  const updateSelection = (index: number) => {
    setSelected(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelected(null);
    setCurrentIndex(null);
  };

  const filteredImages = images
    .filter((img) => img.album === selectedAlbum && img.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortNewest) {
        return b.name.localeCompare(a.name);
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <main className="w-full min-h-screen bg-white text-black py-20 px-6 relative">
      <h1 className="text-center text-4xl font-extrabold mb-8 text-blue-600">Gallery</h1>

      <div className="flex justify-center mb-6 space-x-4">
        {['Winter Camp', 'Events'].map((album) => (
          <button
            key={album}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedAlbum === album ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'
            }`}
            onClick={() => setSelectedAlbum(album)}
          >
            {album}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 w-full max-w-md"
        />
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setSortNewest(!sortNewest)}
          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition"
        >
          Sort: {sortNewest ? 'Newest First' : 'Oldest First'}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {filteredImages.map((img, index) => (
            <motion.img
              key={img.id}
              src={img.url}
              alt={img.name}
              loading="lazy"
              className="rounded-xl shadow-md hover:scale-105 transition-transform object-cover cursor-pointer h-48 w-full"
              whileHover={{ scale: 1.05 }}
              onClick={() => updateSelection(index)}
            />
          ))}
        </motion.div>
      )}

      {/* Lightbox */}
      {selected && currentIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-screen-xl w-full max-h-[90vh] flex flex-col items-center"
          >
            <img
              src={selected.url}
              alt={selected.name}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-white font-medium text-lg text-center px-4">{selected.name}</div>

            <div className="absolute top-4 right-4 flex space-x-3">
              <a
                href={selected.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition"
                title="Download"
              >
                ⬇
              </a>
              <button
                onClick={() => window.open(selected.url, '_blank')}
                title="Open in new tab"
                className="text-white hover:text-blue-300 transition"
              >
                ⧉
              </button>
              <button
                onClick={closeLightbox}
                title="Close"
                className="text-white text-2xl font-bold hover:text-red-400 transition"
              >
                ✕
              </button>
            </div>

            {currentIndex > 0 && (
              <button
                onClick={() => updateSelection(currentIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-400 transition"
                title="Previous"
              >
                ‹
              </button>
            )}
            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={() => updateSelection(currentIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-400 transition"
                title="Next"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
