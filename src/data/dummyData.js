// Comprehensive dummy data for the Online Shopping Platform

export const heroContent = {
  title: "Wholesale South Indian Foods",
  subtitle: "Browse all dry and frozen items from reputed brands like VIS***, AS***, MAL***, MAR***, etc.",
  description: "Delivered all over UK"
}

export const brands = [
  "VIS***",
  "AS***",
  "MAL***",
  "MAR***"
]

export const categories = [
  { id: 1, name: "Rice & Grains", icon: "🌾", description: "Wholesale Rice & Grains" },
  { id: 2, name: "Dals & Pulses", icon: "🥣", description: "Bulk Dals & Pulses" },
  { id: 3, name: "Oils & Ghee", icon: "🛢️", description: "Cooking Oils & Ghee" },
  { id: 4, name: "Spices & Masalas", icon: "🌶️", description: "Authentic Spices" },
  { id: 5, name: "Snacks & Sweets", icon: "🍘", description: "Traditional Snacks" },
  { id: 6, name: "Beverages", icon: "☕", description: "Coffee & Tea" },
  { id: 7, name: "Frozen Foods", icon: "🧊", description: "Ready to Cook/Eat Items" },
]

export const products = [
  {
    id: 1,
    name: "Sona Masoori Rice (25kg)",
    brand: "VIS***",
    category: "Rice & Grains",
    categoryId: 1,
    price: 1250,
    originalPrice: 1400,
    rating: 4.8,
    reviewCount: 128,
    image: "https://picsum.photos/seed/rice/300/300",
    description: "Premium quality aged Sona Masoori Rice in wholesale pack",
    stock: 50,
    unit: "bag",
    badge: "Bestseller",
    tags: ["rice", "wholesale", "south indian"]
  },
  {
    id: 2,
    name: "Idli Rice (25kg)",
    brand: "AS***",
    category: "Rice & Grains",
    categoryId: 1,
    price: 1100,
    originalPrice: 1250,
    rating: 4.7,
    reviewCount: 95,
    image: "https://picsum.photos/seed/idlirice/300/300",
    description: "Perfect for soft idlis and crispy dosas",
    stock: 60,
    unit: "bag",
    badge: "Essential",
    tags: ["rice", "idli", "wholesale"]
  },
  {
    id: 3,
    name: "Toor Dal (5kg)",
    brand: "MAL***",
    category: "Dals & Pulses",
    categoryId: 2,
    price: 650,
    originalPrice: 750,
    rating: 4.6,
    reviewCount: 72,
    image: "https://picsum.photos/seed/toordal/300/300",
    description: "Unpolished Toor Dal, high in protein",
    stock: 100,
    unit: "pack",
    badge: "Organic",
    tags: ["dal", "protein", "wholesale"]
  },
  {
    id: 4,
    name: "Urad Dal Whole (5kg)",
    brand: "MAR***",
    category: "Dals & Pulses",
    categoryId: 2,
    price: 700,
    originalPrice: 800,
    rating: 4.5,
    reviewCount: 60,
    image: "https://picsum.photos/seed/uraddal/300/300",
    description: "Premium White Urad Dal for batter",
    stock: 80,
    unit: "pack",
    badge: "Fresh",
    tags: ["dal", "batter", "wholesale"]
  },
  {
    id: 5,
    name: "Coconut Oil (5L)",
    brand: "VIS***",
    category: "Oils & Ghee",
    categoryId: 3,
    price: 1200,
    originalPrice: 1400,
    rating: 4.9,
    reviewCount: 150,
    image: "https://picsum.photos/seed/coconutoil/300/300",
    description: "Pure cold-pressed coconut oil",
    stock: 40,
    unit: "can",
    badge: "Pure",
    tags: ["oil", "coconut", "cooking"]
  },
  {
    id: 6,
    name: "Pure Ghee (1L)",
    brand: "AS***",
    category: "Oils & Ghee",
    categoryId: 3,
    price: 550,
    originalPrice: 650,
    rating: 4.8,
    reviewCount: 85,
    image: "https://picsum.photos/seed/ghee/300/300",
    description: "Aromatic pure cow ghee",
    stock: 60,
    unit: "jar",
    badge: "Premium",
    tags: ["ghee", "dairy", "cooking"]
  },

  {
    id: 7,
    name: "Tamarind (1kg)",
    brand: "MAL***",
    category: "Spices & Masalas",
    categoryId: 4,
    price: 180,
    originalPrice: 220,
    rating: 4.4,
    reviewCount: 45,
    image: "https://picsum.photos/seed/tamarind/300/300",
    description: "Seedless premium tamarind",
    stock: 150,
    unit: "pack",
    badge: "Tangy",
    tags: ["spice", "tamarind", "cooking"]
  },
  {
    id: 8,
    name: "Dried Red Chillies (1kg)",
    brand: "MAR***",
    category: "Spices & Masalas",
    categoryId: 4,
    price: 250,
    originalPrice: 300,
    rating: 4.5,
    reviewCount: 55,
    image: "https://picsum.photos/seed/redchilli/300/300",
    description: "Spicy Guntur red chillies",
    stock: 100,
    unit: "per pack",
    badge: "Spicy",
    tags: ["spice", "chilli", "wholesale"]
  },
  {
    id: 9,
    name: "Sambar Powder (500g)",
    brand: "VIS***",
    category: "Spices & Masalas",
    categoryId: 4,
    price: 220,
    originalPrice: 250,
    rating: 4.7,
    reviewCount: 110,
    image: "https://picsum.photos/seed/sambarpowder/300/300",
    description: "Authentic homemade style sambar powder",
    stock: 200,
    unit: "per pack",
    badge: "Authentic",
    tags: ["masala", "sambar", "spice"]
  },
  {
    id: 10,
    name: "Filter Coffee Powder (1kg)",
    brand: "AS***",
    category: "Beverages",
    categoryId: 6,
    price: 450,
    originalPrice: 550,
    rating: 4.9,
    reviewCount: 210,
    image: "https://picsum.photos/seed/filtercoffee/300/300",
    description: "Strong blend of Arabica and Robusta with Chicory",
    stock: 80,
    unit: "per pack",
    badge: "Strong",
    tags: ["coffee", "beverage", "wholesale"]
  },

  {
    id: 11,
    name: "Murukku (2kg)",
    brand: "MAL***",
    category: "Snacks & Sweets",
    categoryId: 5,
    price: 400,
    originalPrice: 500,
    rating: 4.6,
    reviewCount: 90,
    image: "https://picsum.photos/seed/murukku/300/300",
    description: "Crunchy rice flour chakli/murukku",
    stock: 50,
    unit: "pack",
    badge: "Crunchy",
    tags: ["snack", "wholesale", "traditional"]
  },
  {
    id: 12,
    name: "Mysore Pak (1kg)",
    brand: "MAR***",
    category: "Snacks & Sweets",
    categoryId: 5,
    price: 550,
    originalPrice: 650,
    rating: 4.8,
    reviewCount: 120,
    image: "https://picsum.photos/seed/mysorepak/300/300",
    description: "Melt in mouth ghee Mysore Pak",
    stock: 40,
    unit: "box",
    badge: "Sweet",
    tags: ["sweet", "ghee", "traditional"]
  },

  {
    id: 13,
    name: "Jaggery (5kg)",
    brand: "VIS***",
    category: "Rice & Grains",
    categoryId: 1,
    price: 300,
    originalPrice: 350,
    rating: 4.5,
    reviewCount: 65,
    image: "https://picsum.photos/seed/jaggery/300/300",
    description: "Organic chemical-free jaggery blocks",
    stock: 100,
    unit: "pack",
    badge: "Organic",
    tags: ["sweetener", "organic", "wholesale"]
  },
  {
    id: 14,
    name: "Ponni Rice (25kg)",
    brand: "AS***",
    category: "Rice & Grains",
    categoryId: 1,
    price: 1350,
    originalPrice: 1500,
    rating: 4.7,
    reviewCount: 88,
    image: "https://picsum.photos/seed/ponnirice/300/300",
    description: "Boiled Ponni Rice for daily use",
    stock: 50,
    unit: "bag",
    badge: "Staple",
    tags: ["rice", "wholesale", "staple"]
  },

  {
    id: 15,
    name: "Roasted Gram (1kg)",
    brand: "MAL***",
    category: "Dals & Pulses",
    categoryId: 2,
    price: 120,
    originalPrice: 150,
    rating: 4.4,
    reviewCount: 40,
    image: "https://picsum.photos/seed/roastedgram/300/300",
    description: "Fried gram for chutneys",
    stock: 120,
    unit: "per pack",
    badge: "Fresh",
    tags: ["dal", "chutney", "wholesale"]
  },

  {
    id: 16,
    name: "Banana Chips (1kg)",
    brand: "MAR***",
    category: "Snacks & Sweets",
    categoryId: 5,
    price: 350,
    originalPrice: 400,
    rating: 4.7,
    reviewCount: 150,
    image: "https://picsum.photos/seed/bananachips/300/300",
    description: "Kerala style coconut oil fried banana chips",
    stock: 60,
    unit: "pack",
    badge: "Tasty",
    tags: ["snack", "kerala", "wholesale"]
  },
  {
    id: 17,
    name: "Frozen Idli/Dosa Batter (1kg)",
    brand: "AS***",
    category: "Frozen Foods",
    categoryId: 7,
    price: 150,
    originalPrice: 180,
    rating: 4.6,
    reviewCount: 75,
    image: "https://picsum.photos/seed/frozenbatter/300/300",
    description: "Ready to use fermented batter for soft idlis and crispy dosas.",
    stock: 100,
    unit: "pack",
    badge: "Convenient",
    tags: ["frozen", "batter", "ready to cook", "south indian"]
  },
  {
    id: 18,
    name: "Frozen Malabar Parottas (5 pcs)",
    brand: "MAR***",
    category: "Frozen Foods",
    categoryId: 7,
    price: 120,
    originalPrice: 140,
    rating: 4.8,
    reviewCount: 110,
    image: "https://picsum.photos/seed/frozenparotta/300/300",
    description: "Layered flatbread, ready to heat and eat.",
    stock: 80,
    unit: "pack",
    badge: "Bestseller",
    tags: ["frozen", "parotta", "kerala", "ready to eat"]
  },
]



export const getProductsByCategory = (categoryId) => {
  return products.filter(p => p.categoryId == categoryId)
}

export const getFeaturedProducts = (count) => {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count)
}

export const getAllProducts = () => {
  return products
}

export const getProductById = (id) => {
  return products.find(p => p.id == id)
}

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase()
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description?.toLowerCase()?.includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

export const filterByRating = (minRating = 0) => {
  return products.filter(p => p.rating >= minRating)
}

export const filterByPrice = (minPrice = 0, maxPrice = Infinity) => {
  return products.filter(p => p.price >= minPrice && p.price <= maxPrice)
}

export const filterByBadge = (badge) => {
  return products.filter(p => p.badge === badge)
}

export const filterByStock = (inStockOnly = false) => {
  if (inStockOnly) {
    return products.filter(p => p.stock > 0)
  }
  return products
}

export const getUniqueBadges = () => {
  const badges = new Set(products.map(p => p.badge))
  return Array.from(badges)
}

export const getUniqueCategories = () => {
  const cats = new Set(products.map(p => p.category))
  return Array.from(cats)
}

export const getProductsByTags = (tags) => {
  return products.filter(p =>
    tags.some(tag => p.tags.includes(tag))
  )
}

export const getSimilarProducts = (productId, count = 4) => {
  const product = products.find(p => p.id == productId)
  if (!product) return []
  
  return products
    .filter(p => 
      p.id !== productId && 
      (p.categoryId === product.categoryId || 
       p.tags.some(tag => product.tags.includes(tag)))
    )
    .slice(0, count)
}

export const getDiscountedProducts = (minDiscount = 0) => {
  return products.filter(p => {
    const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
    return discount >= minDiscount
  }).sort((a, b) => {
    const discountA = Math.round(((a.originalPrice - a.price) / a.originalPrice) * 100)
    const discountB = Math.round(((b.originalPrice - b.price) / b.originalPrice) * 100)
    return discountB - discountA
  })
}

export const getNewArrivals = (count) => {
  return [...products].sort((a, b) => b.id - a.id).slice(0, count)
}
