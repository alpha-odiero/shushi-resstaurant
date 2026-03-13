// ─────────────────────────────────────────────
// HUSH SUSHI — Central Data Store
// ─────────────────────────────────────────────

export const RESTAURANT = {
  name: 'Hush',
  tagline: 'Modern Sushi Restaurant',
  description: "Where Japanese tradition meets Nairobi's modern pulse. An experience in silence, craft, and flavor.",
  address: 'The Junction Mall, Ngong Road, Nairobi, Kenya',
  phone: '+254 700 123 456',
  email: 'reservations@hushnairobi.com',
  hours: {
    weekdays: '12:00 PM – 10:30 PM',
    weekends: '11:00 AM – 11:30 PM',
    closed: 'Monday',
  },
  social: {
    instagram: '#',
    twitter: '#',
    facebook: '#',
  }
}

// ─── MENU DATA ────────────────────────────────
export const MENU = {
  'Sushi Rolls': [
    { id: 1, name: 'Dragon Roll', price: 1850, description: 'Shrimp tempura, cucumber, avocado, tobiko, spicy mayo', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80', popular: true, spicy: false },
    { id: 2, name: 'Nairobi Crunch', price: 1650, description: 'Tuna, jalapeño, cream cheese, crispy onion, sriracha', image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80', popular: true, spicy: true },
    { id: 3, name: 'Rainbow Roll', price: 2100, description: 'California inside, topped with fresh fish & avocado', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80', popular: false, spicy: false },
    { id: 4, name: 'Volcano Roll', price: 1950, description: 'Spicy tuna, cucumber, tempura flakes, volcano sauce', image: 'https://images.unsplash.com/photo-1617196034085-52a27a0fa621?w=400&q=80', popular: false, spicy: true },
    { id: 5, name: 'Spider Roll', price: 2200, description: 'Soft shell crab, cucumber, sprouts, avocado, spicy mayo', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&q=80', popular: false, spicy: false },
    { id: 6, name: 'Salmon Mango', price: 1750, description: 'Fresh salmon, mango, cucumber, sesame, yuzu dressing', image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=400&q=80', popular: true, spicy: false },
  ],
  'Nigiri': [
    { id: 7, name: 'Salmon Nigiri (2pcs)', price: 1200, description: 'Wild Atlantic salmon over hand-pressed shari', image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80', popular: true, spicy: false },
    { id: 8, name: 'Tuna Nigiri (2pcs)', price: 1400, description: 'Premium bluefin tuna, wasabi, pickled ginger', image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=400&q=80', popular: false, spicy: false },
    { id: 9, name: 'Yellowtail Nigiri (2pcs)', price: 1350, description: 'Hamachi, micro shiso, yuzu zest', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80', popular: false, spicy: false },
    { id: 10, name: 'Ebi Nigiri (2pcs)', price: 1100, description: 'Poached tiger prawn, seasoned sushi rice', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80', popular: false, spicy: false },
  ],
  'Sashimi': [
    { id: 11, name: 'Chef\'s Sashimi Platter', price: 3800, description: '12 pieces — tuna, salmon, yellowtail, octopus, sea bass', image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80', popular: true, spicy: false },
    { id: 12, name: 'Salmon Sashimi (5pcs)', price: 1800, description: 'Ultra-fresh Atlantic salmon, ponzu dipping', image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80', popular: false, spicy: false },
    { id: 13, name: 'Tuna Tataki', price: 2200, description: 'Seared tuna, daikon, citrus soy, sesame oil', image: 'https://images.unsplash.com/photo-1617196034085-52a27a0fa621?w=400&q=80', popular: false, spicy: false },
  ],
  'Ramen': [
    { id: 14, name: 'Tonkotsu Ramen', price: 1950, description: '12-hour pork broth, chashu pork, soft egg, nori, bamboo', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80', popular: true, spicy: false },
    { id: 15, name: 'Spicy Miso Ramen', price: 1850, description: 'Red miso, ground pork, corn, butter, togarashi', image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&q=80', popular: false, spicy: true },
    { id: 16, name: 'Shoyu Veggie Ramen', price: 1650, description: 'Soy broth, mushrooms, tofu, broccolini, sesame', image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=400&q=80', popular: false, spicy: false },
  ],
  'Appetizers': [
    { id: 17, name: 'Edamame', price: 450, description: 'Steamed soybeans, flaky sea salt, togarashi', image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=400&q=80', popular: false, spicy: false },
    { id: 18, name: 'Gyoza (6pcs)', price: 950, description: 'Pan-fried pork & cabbage dumplings, ponzu dip', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80', popular: true, spicy: false },
    { id: 19, name: 'Miso Soup', price: 400, description: 'White miso, silken tofu, wakame, green onion', image: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=400&q=80', popular: false, spicy: false },
    { id: 20, name: 'Agedashi Tofu', price: 850, description: 'Crispy silken tofu, dashi broth, grated daikon', image: 'https://images.unsplash.com/photo-1617196034085-52a27a0fa621?w=400&q=80', popular: false, spicy: false },
  ],
  'Drinks': [
    { id: 21, name: 'Sake Selection', price: 950, description: 'Curated Japanese sake, warm or chilled', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', popular: false, spicy: false },
    { id: 22, name: 'Yuzu Gin & Tonic', price: 1200, description: 'Japanese gin, fresh yuzu, premium tonic, cucumber', image: 'https://images.unsplash.com/photo-1560508179-b2c9a3555b85?w=400&q=80', popular: true, spicy: false },
    { id: 23, name: 'Matcha Latte', price: 650, description: 'Ceremonial grade matcha, oat milk, honey', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80', popular: false, spicy: false },
    { id: 24, name: 'Sparkling Yuzu Lemonade', price: 550, description: 'Fresh yuzu, house-made syrup, sparkling water', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80', popular: false, spicy: false },
  ],
  'Desserts': [
    { id: 25, name: 'Mochi Ice Cream (3pcs)', price: 750, description: 'Matcha, strawberry & mango mochi ice cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80', popular: true, spicy: false },
    { id: 26, name: 'Black Sesame Panna Cotta', price: 850, description: 'Silky sesame custard, yuzu gel, tuile crisp', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80', popular: false, spicy: false },
    { id: 27, name: 'Matcha Tiramisu', price: 900, description: 'Japanese twist on the Italian classic, green tea cream', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80', popular: false, spicy: false },
  ],
}

// ─── TESTIMONIALS ────────────────────────────
export const TESTIMONIALS = [
  { id: 1, name: 'Amara Osei', role: 'Food Critic, Nairobi Magazine', rating: 5, text: 'Hush has redefined fine dining in Nairobi. The Dragon Roll alone is worth every shilling — a symphony of textures and bold flavors executed with surgeon-like precision.' },
  { id: 2, name: 'Tariq Al-Mansouri', role: 'Travel Blogger', rating: 5, text: 'I\'ve eaten sushi from Tokyo to New York, and Hush stands proud among them. The omakase experience was transcendent — each course a quiet revelation.' },
  { id: 3, name: 'Sophia Kamau', role: 'Interior Designer', rating: 5, text: 'Beyond the food, the atmosphere is immaculate. The lighting, the music, the service — everything is curated. A perfect date night destination.' },
  { id: 4, name: 'David Mwangi', role: 'Corporate Executive', rating: 5, text: 'We host our most important client dinners at Hush exclusively. The private dining room is exceptional, and the chef always surprises us.' },
]

// ─── BLOG POSTS ──────────────────────────────
export const BLOG_POSTS = [
  { id: 1, title: 'The Art of Omakase: Why Trusting the Chef Is the Ultimate Experience', author: 'Chef Kenji Mura', date: 'February 28, 2025', category: 'Food Culture', readTime: '6 min', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=80', excerpt: 'Omakase — "I leave it up to you" — is more than a meal. It\'s a philosophy of trust between guest and chef, a journey without a destination...', content: 'Omakase dining is one of Japan\'s most intimate culinary traditions. When you sit at the chef\'s counter and utter those words — "omakase shimasu" — you surrender control completely, and in doing so, you gain something far greater: a front-row seat to a chef\'s creative vision.\n\nAt Hush, our omakase menu changes with the seasons and with what arrives fresh from our suppliers. Chef Kenji begins each morning at the fish market, selecting the finest cuts of salmon, yellowtail, and tuna. The menu is born in those early hours, before the restaurant opens.\n\nThe experience typically spans 12 to 16 courses over two to three hours. Guests are invited to sit back, set aside their phones, and simply be present. Each piece arrives with a brief explanation — the origin of the fish, the rice seasoning, the intention behind the pairing. It\'s education disguised as pleasure.\n\nTrust is the currency of omakase. And at Hush, we spend it carefully.' },
  { id: 2, title: 'A Guide to Japanese Cuisine in Nairobi: What to Order and Why', author: 'Hush Editorial', date: 'March 10, 2025', category: 'Guide', readTime: '8 min', image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=800&q=80', excerpt: 'Navigating a Japanese menu for the first time can feel like reading a beautiful language you don\'t speak. Here\'s your essential guide...', content: 'Japanese cuisine is vast and nuanced, and choosing from a menu at a premium restaurant can be both exciting and overwhelming. This guide will walk you through the essentials.\n\nSUSHI ROLLS (MAKI): These are perhaps the most recognizable. At their core, maki consists of fish, vegetables, or other fillings wrapped in seasoned rice and nori. The key is balance — a well-made roll shouldn\'t be overly sauced or oversized.\n\nNIGIRI: A small mound of hand-pressed rice topped with a slice of raw or cooked fish. The simplicity is deceptive. Great nigiri demands perfect rice temperature, correct fish thickness, and a precise amount of wasabi between fish and rice.\n\nSASHIMI: Simply sliced raw fish, no rice. This is where the quality of the fish is most exposed — there\'s nowhere to hide. If you want to taste the ocean, order sashimi.\n\nRAMEN: Japanese ramen is nothing like the instant noodles of your student days. A true broth can take 12 to 24 hours to prepare.' },
  { id: 3, title: 'Nairobi\'s Finest: How the City\'s Dining Scene Has Evolved', author: 'Amara Osei', date: 'January 15, 2025', category: 'Nairobi Dining', readTime: '5 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', excerpt: 'Nairobi has quietly become East Africa\'s most exciting food city. From Westlands to Karen, a new generation of chefs is rewriting the rules...', content: 'There was a time when fine dining in Nairobi meant a hotel restaurant, starched tablecloths, and a menu that played it safe. That time is firmly in the past.\n\nToday, Nairobi\'s culinary scene is buzzing with ambition. Chefs trained in London, Tokyo, and New York are returning home, bringing world-class techniques and applying them to local and imported ingredients. The result is a dining scene that feels fresh, cosmopolitan, and unmistakably Kenyan in spirit.\n\nHush is part of this new wave. Opening in 2023, it quickly established itself as the go-to destination for serious Japanese cuisine — not a watered-down adaptation, but the real thing, executed by a team with deep respect for the tradition.\n\nThe restaurant\'s success is a testament to Nairobi\'s maturation. Diners here are increasingly sophisticated — they\'ve traveled, they\'ve tasted, and they know the difference.' },
  { id: 4, title: 'The Perfect Pairing: Sake and Sushi Demystified', author: 'Chef Kenji Mura', date: 'December 20, 2024', category: 'Wine & Sake', readTime: '7 min', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', excerpt: 'Sake is Japan\'s most misunderstood beverage in the West. Here\'s how to pair it with sushi for a transformative dining experience...', content: 'Sake and sushi share a deep cultural bond — both born from rice, both refined over centuries. Yet outside Japan, sake remains a mystery to many diners.\n\nAt Hush, our sake program is carefully curated by our sommelier, who sources bottles directly from small family breweries in Niigata, Kyoto, and Hiroshima. The range spans from light and floral junmai ginjo to rich, complex junmai daiginjo aged in cedar casks.\n\nFor lighter fish like sea bass and flounder sashimi, we recommend a chilled junmai ginjo — its crisp acidity and subtle fruit notes complement without overpowering. For fattier fish like salmon and toro, a slightly warmer junmai with more umami depth creates a beautiful harmony.\n\nThe secret of sake pairing is that it rarely clashes. Unlike wine, sake\'s umami richness naturally aligns with the savory depth of seafood. The question is not "will this work?" but "how extraordinary can this be?"' },
]

// ─── GALLERY IMAGES ──────────────────────────
export const GALLERY = [
  { id: 1, src: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80', category: 'food', alt: 'Dragon Roll' },
  { id: 2, src: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80', category: 'food', alt: 'Sushi Selection' },
  { id: 3, src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80', category: 'food', alt: 'Tonkotsu Ramen' },
  { id: 4, src: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80', category: 'food', alt: 'Sashimi Platter' },
  { id: 5, src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80', category: 'food', alt: 'Rainbow Roll' },
  { id: 6, src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80', category: 'food', alt: 'Gyoza' },
  { id: 7, src: 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=600&q=80', category: 'restaurant', alt: 'Restaurant Interior' },
  { id: 8, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', category: 'restaurant', alt: 'Dining Room' },
  { id: 9, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', category: 'restaurant', alt: 'Table Setting' },
  { id: 10, src: 'https://images.unsplash.com/photo-1455279032140-49a4bf46f343?w=600&q=80', category: 'events', alt: 'Private Event' },
  { id: 11, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80', category: 'events', alt: 'Chef\'s Counter' },
  { id: 12, src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', category: 'food', alt: 'Plated Dish' },
]

export const CATEGORY_ICONS = {
  'Sushi Rolls': '🍣',
  'Nigiri': '🍱',
  'Sashimi': '🐟',
  'Ramen': '🍜',
  'Appetizers': '🥟',
  'Drinks': '🍶',
  'Desserts': '🍡',
}
