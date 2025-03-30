import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiStar, FiFilter, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';
import products from './Products';

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02, rotate: -0.5 },
  tap: { scale: 0.98 }
};

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: 'spring',
      damping: 25,
      stiffness: 300
    } 
  }
};

const filterPanelVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      opacity: { duration: 0.2 },
      height: { duration: 0.3 }
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: {
      opacity: { duration: 0.2 },
      height: { duration: 0.3 }
    }
  }
};

const ProductCatalog = () => {
  // State management
  const [filters, setFilters] = useState({
    category: null,
    priceRange: null,
    searchQuery: ''
  });
  const [sortBy, setSortBy] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  // Available categories and price ranges
  const categories = [...new Set(products.map(product => product.category))];
  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200-1000' }
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Search filter
      if (filters.searchQuery && 
          !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      
      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (product.price < min || product.price > max) {
          return false;
        }
      }
      
      return true;
    })
    .sort((a, b) => {
      // Sorting logic
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const toggleLike = (productId) => {
    const newLiked = new Set(likedProducts);
    likedProducts.has(productId) ? newLiked.delete(productId) : newLiked.add(productId);
    setLikedProducts(newLiked);
  };

  const resetFilters = () => {
    setFilters({ category: null, priceRange: null, searchQuery: '' });
    setSortBy('default');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Search and Filter Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/50 border border-white/10 focus:border-purple-500 focus:outline-none"
              value={filters.searchQuery}
              onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              className="appearance-none bg-white/10 backdrop-blur-md rounded-xl pl-4 pr-10 py-3 font-semibold text-orange-300 border border-white/10 focus:border-purple-500 focus:outline-none cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default" className="font-semibold">Sort by</option>
              <option value="price-low" className="font-semibold">Price: Low to High</option>
              <option value="price-high" className="font-semibold">Price: High to Low</option>
              <option value="rating" className="font-semibold">Highest Rating</option>
              <option value="name" className="font-semibold">Name: A-Z</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
          </div>

          {/* Filter Button */}
          <motion.button
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter />
            Filters
          </motion.button>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              variants={filterPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden mb-8 border border-white/10"
            >
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-white font-medium mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm ${filters.category === category ? 'bg-purple-600 text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilters({...filters, category: filters.category === category ? null : category})}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="text-white font-medium mb-3">Price Range</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <motion.button
                        key={range.value}
                        className={`px-4 py-2 rounded-full text-sm ${filters.priceRange === range.value ? 'bg-purple-600 text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilters({...filters, priceRange: filters.priceRange === range.value ? null : range.value})}
                      >
                        {range.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 p-4 flex justify-end">
                <button
                  className="text-white/70 hover:text-white text-sm"
                  onClick={resetFilters}
                >
                  Reset all filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <div className="text-white/70 mb-6">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } }}}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 cursor-pointer relative overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Love Button */}
                <motion.div 
                  className="absolute top-4 right-4 z-10"
                  whileHover={{ scale: 1.2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(product.id);
                  }}
                >
                  <FiHeart 
                    className={`text-xl ${likedProducts.has(product.id) ? 'text-red-500 fill-red-500' : 'text-white'}`}
                  />
                </motion.div>

                {/* Product Image */}
                <div className="h-48 w-full bg-white/20 rounded-xl mb-4 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-white/70 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    <FiStar className="mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-purple-400">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-white text-xl mb-2">No products found</h3>
            <p className="text-white/60">Try adjusting your filters or search query</p>
            <button
              className="mt-4 text-purple-400 hover:text-purple-300"
              onClick={resetFilters}
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <FiX 
                className="absolute top-6 right-6 text-white text-2xl cursor-pointer hover:text-purple-400 transition-colors"
                onClick={() => setSelectedProduct(null)}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-80 bg-white/20 rounded-xl overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-amber-400">
                      <FiStar className="mr-1" />
                      <span>{selectedProduct.rating}</span>
                    </div>
                    <span className="text-white/50">•</span>
                    <span className="text-white/70 capitalize">{selectedProduct.category}</span>
                  </div>
                  <p className="text-white/80 mb-6">{selectedProduct.description}</p>
                  <div className="text-3xl font-bold text-purple-400 mb-6">
                    ${selectedProduct.price.toFixed(2)}
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center w-12 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(selectedProduct.id)}
                    >
                      <FiHeart 
                        className={`text-xl ${likedProducts.has(selectedProduct.id) ? 'text-red-500 fill-red-500' : 'text-white'}`}
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCatalog;