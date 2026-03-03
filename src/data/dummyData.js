// Comprehensive dummy data for the Online Shopping Platform

export const categories = [
  { id: 1, name: "Groceries", icon: "🥬", description: "Fresh vegetables & fruits" },
  { id: 2, name: "Dairy", icon: "🥛", description: "Milk, cheese & yogurt" },
  { id: 3, name: "Bakery", icon: "🍞", description: "Fresh bread & pastries" },
  { id: 4, name: "Beverages", icon: "☕", description: "Drinks & juices" },
  { id: 5, name: "Snacks", icon: "🍿", description: "Chips & snacks" },
  { id: 6, name: "Personal Care", icon: "🧴", description: "Soaps & shampoos" },
]

export const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Groceries",
    categoryId: 1,
    price: 45,
    originalPrice: 60,
    rating: 4.5,
    reviewCount: 128,
    image: "https://picsum.photos/seed/tomatoes/300/300",
    description: "Fresh, organic tomatoes directly from local farms",
    stock: 150,
    unit: "per kg",
    badge: "Fresh",
    tags: ["vegetables", "organic", "fresh"]
  },
  {
    id: 2,
    name: "Carrots (1kg Pack)",
    category: "Groceries",
    categoryId: 1,
    price: 35,
    originalPrice: 45,
    rating: 4.6,
    reviewCount: 95,
    image: "https://picsum.photos/seed/carrots/300/300",
    description: "Crispy and sweet carrots perfect for salads and cooking",
    stock: 200,
    unit: "per pack",
    badge: "Healthy",
    tags: ["vegetables", "healthy", "organic"]
  },
  {
    id: 3,
    name: "Red Onions (500g)",
    category: "Groceries",
    categoryId: 1,
    price: 25,
    originalPrice: 35,
    rating: 4.3,
    reviewCount: 72,
    image: "https://picsum.photos/seed/redonion/300/300",
    description: "Premium red onions with strong flavor",
    stock: 180,
    unit: "per pack",
    badge: "Fresh",
    tags: ["vegetables", "fresh", "spices"]
  },
  {
    id: 4,
    name: "Bananas (1kg)",
    category: "Groceries",
    categoryId: 1,
    price: 40,
    originalPrice: 50,
    rating: 4.7,
    reviewCount: 210,
    image: "https://picsum.photos/seed/banana/300/300",
    description: "Golden yellow bananas rich in potassium",
    stock: 300,
    unit: "per kg",
    badge: "Fresh",
    tags: ["fruits", "fresh", "healthy"]
  },
  {
    id: 5,
    name: "Apples (6pcs)",
    category: "Groceries",
    categoryId: 1,
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    reviewCount: 340,
    image: "https://picsum.photos/seed/apples/300/300",
    description: "Crispy red apples imported from Kashmir",
    stock: 250,
    unit: "per pack",
    badge: "Premium",
    tags: ["fruits", "premium", "imported"]
  },
  {
    id: 6,
    name: "Spinach (250g)",
    category: "Groceries",
    categoryId: 1,
    price: 30,
    originalPrice: 40,
    rating: 4.4,
    reviewCount: 85,
    image: "https://picsum.photos/seed/spinach/300/300",
    description: "Fresh leafy spinach packed with nutrients",
    stock: 120,
    unit: "per pack",
    badge: "Healthy",
    tags: ["vegetables", "healthy", "organic"]
  },

  {
    id: 7,
    name: "Whole Milk (1L)",
    category: "Dairy",
    categoryId: 2,
    price: 55,
    originalPrice: 65,
    rating: 4.6,
    reviewCount: 420,
    image: "https://picsum.photos/seed/milk/300/300",
    description: "Pure whole milk from trusted dairy farms",
    stock: 500,
    unit: "per liter",
    badge: "Fresh",
    tags: ["dairy", "milk", "fresh"]
  },
  {
    id: 8,
    name: "Yogurt (500g)",
    category: "Dairy",
    categoryId: 2,
    price: 45,
    originalPrice: 55,
    rating: 4.5,
    reviewCount: 280,
    image: "https://picsum.photos/seed/yogurt/300/300",
    description: "Creamy and delicious plain yogurt",
    stock: 350,
    unit: "per pack",
    badge: "Fresh",
    tags: ["dairy", "yogurt", "healthy"]
  },
  {
    id: 9,
    name: "Cheddar Cheese (200g)",
    category: "Dairy",
    categoryId: 2,
    price: 180,
    originalPrice: 220,
    rating: 4.7,
    reviewCount: 195,
    image: "https://picsum.photos/seed/cheese/300/300",
    description: "Premium imported cheddar cheese",
    stock: 100,
    unit: "per pack",
    badge: "Premium",
    tags: ["cheese", "premium", "imported"]
  },
  {
    id: 10,
    name: "Butter (200g)",
    category: "Dairy",
    categoryId: 2,
    price: 120,
    originalPrice: 150,
    rating: 4.4,
    reviewCount: 310,
    image: "https://picsum.photos/seed/butter/300/300",
    description: "Pure unsalted butter for cooking and baking",
    stock: 200,
    unit: "per pack",
    badge: "Fresh",
    tags: ["butter", "dairy", "cooking"]
  },

  {
    id: 11,
    name: "Whole Wheat Bread",
    category: "Bakery",
    categoryId: 3,
    price: 40,
    originalPrice: 50,
    rating: 4.5,
    reviewCount: 100,
    image: "https://picsum.photos/seed/bread/300/300",
    description: "Soft and healthy whole wheat bread",
    stock: 120,
    unit: "per loaf",
    badge: "Healthy",
    tags: ["bread", "healthy", "bakery"]
  },
  {
    id: 12,
    name: "Chocolate Cake (500g)",
    category: "Bakery",
    categoryId: 3,
    price: 250,
    originalPrice: 320,
    rating: 4.8,
    reviewCount: 380,
    image: "https://picsum.photos/seed/cake/300/300",
    description: "Rich and moist chocolate cake",
    stock: 50,
    unit: "per cake",
    badge: "Premium",
    tags: ["cake", "chocolate", "bakery"]
  },

  {
    id: 13,
    name: "Orange Juice (1L)",
    category: "Beverages",
    categoryId: 4,
    price: 65,
    originalPrice: 80,
    rating: 4.5,
    reviewCount: 285,
    image: "https://picsum.photos/seed/juice/300/300",
    description: "Fresh squeezed orange juice",
    stock: 200,
    unit: "per liter",
    badge: "Fresh",
    tags: ["juice", "fresh", "healthy"]
  },
  {
    id: 14,
    name: "Coffee Beans (500g)",
    category: "Beverages",
    categoryId: 4,
    price: 280,
    originalPrice: 350,
    rating: 4.7,
    reviewCount: 420,
    image: "https://picsum.photos/seed/coffee/300/300",
    description: "Premium arabica coffee beans",
    stock: 120,
    unit: "per pack",
    badge: "Premium",
    tags: ["coffee", "premium", "imported"]
  },

  {
    id: 15,
    name: "Almonds (250g)",
    category: "Snacks",
    categoryId: 5,
    price: 280,
    originalPrice: 350,
    rating: 4.8,
    reviewCount: 380,
    image: "https://picsum.photos/seed/almonds/300/300",
    description: "Premium raw almonds rich in nutrients",
    stock: 180,
    unit: "per pack",
    badge: "Healthy",
    tags: ["nuts", "healthy", "organic"]
  },

  {
    id: 16,
    name: "Dove Soap (75g)",
    category: "Personal Care",
    categoryId: 6,
    price: 45,
    originalPrice: 60,
    rating: 4.5,
    reviewCount: 680,
    image: "https://picsum.photos/seed/soap/300/300",
    description: "Gentle moisturizing soap bar",
    stock: 500,
    unit: "per piece",
    badge: "Popular",
    tags: ["soap", "skincare", "popular"]
  }
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
