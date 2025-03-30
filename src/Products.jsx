const products = [
    { 
      id: 1, 
      name: 'Cyberpunk Sunglasses', 
      price: 89.99, 
      category: 'accessories', 
      rating: 4.8, 
      description: 'Futuristic AR-enabled eyewear', 
      image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 2, 
      name: 'Smartwatch Pro', 
      price: 199.99, 
      category: 'wearables', 
      rating: 4.7, 
      description: 'AI-powered smartwatch with health tracking', 
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 3, 
      name: 'Wireless Earbuds X', 
      price: 129.99, 
      category: 'audio', 
      rating: 4.6, 
      description: 'Noise-cancelling wireless earbuds', 
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 4, 
      name: '4K Drone', 
      price: 599.99, 
      category: 'gadgets', 
      rating: 4.9, 
      description: 'High-definition camera drone with GPS', 
      image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 5, 
      name: 'Gaming Mouse Elite', 
      price: 79.99, 
      category: 'peripherals', 
      rating: 4.7, 
      description: 'RGB gaming mouse with precision tracking', 
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 6, 
      name: 'Mechanical Keyboard Pro', 
      price: 149.99, 
      category: 'peripherals', 
      rating: 4.8, 
      description: 'RGB mechanical keyboard with macro keys', 
      image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 7, 
      name: 'Smart Home Hub', 
      price: 249.99, 
      category: 'home tech', 
      rating: 4.6, 
      description: 'AI-controlled home automation hub', 
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 8, 
      name: 'VR Headset X', 
      price: 399.99, 
      category: 'gaming', 
      rating: 4.9, 
      description: 'Next-gen virtual reality headset', 
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 9, 
      name: 'Portable Power Bank', 
      price: 59.99, 
      category: 'accessories', 
      rating: 4.5, 
      description: 'Fast-charging power bank with USB-C', 
      image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 10, 
      name: 'AI Voice Assistant', 
      price: 99.99, 
      category: 'home tech', 
      rating: 4.7, 
      description: 'Smart voice assistant for home automation', 
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 11, 
      name: 'Smart LED Light Strip', 
      price: 34.99, 
      category: 'home tech', 
      rating: 4.6, 
      description: 'Color-changing LED strip with app control', 
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 12, 
      name: 'Bluetooth Speaker Pro', 
      price: 89.99, 
      category: 'audio', 
      rating: 4.7, 
      description: 'Portable high-fidelity Bluetooth speaker', 
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 13, 
      name: 'Wireless Charger Pad', 
      price: 39.99, 
      category: 'accessories', 
      rating: 4.5, 
      description: 'Fast wireless charging pad for all devices', 
      image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 14, 
      name: 'Smart Fitness Band', 
      price: 49.99, 
      category: 'wearables', 
      rating: 4.6, 
      description: 'Health tracker with step counter & heart rate monitor', 
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 15, 
      name: 'Smart Thermostat', 
      price: 199.99, 
      category: 'home tech', 
      rating: 4.8, 
      description: 'AI-controlled energy-saving thermostat', 
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 16, 
      name: 'Noise-Cancelling Headphones', 
      price: 249.99, 
      category: 'audio', 
      rating: 4.9, 
      description: 'Premium over-ear noise-cancelling headphones', 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 17, 
      name: 'Action Camera 4K', 
      price: 299.99, 
      category: 'gadgets', 
      rating: 4.7, 
      description: 'Waterproof 4K action camera with stabilizer', 
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 18, 
      name: 'Smart Door Lock', 
      price: 179.99, 
      category: 'home tech', 
      rating: 4.6, 
      description: 'Fingerprint & app-controlled smart door lock', 
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 19, 
      name: 'E-Reader Tablet', 
      price: 129.99, 
      category: 'gadgets', 
      rating: 4.8, 
      description: 'Lightweight e-reader with adjustable lighting', 
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 20, 
      name: 'Gaming Chair Ultimate', 
      price: 349.99, 
      category: 'furniture', 
      rating: 4.7, 
      description: 'Ergonomic gaming chair with lumbar support', 
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' 
    }
  ];
  
  export default products;