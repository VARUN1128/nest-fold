export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  season: string;
  indicativePrice: string;
  materials: string[];
  dimensions?: string;
  leadTime: string;
  craftLocation: string;
  shortDescription: string;
  fullDescription: string;
  spaceSolvingFeature: string;
  craftDetails: string;
  featureSpotlight?: {
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
  };
  images: {
    hero: string;
    gallery: string[];
  };
  dropStatus: 'Limited Drop' | 'Waitlist Open' | 'Sold Out' | 'Coming Soon';
  batchSize: number;
}

export const season01Products: Product[] = [
  {
    id: 's01-01',
    slug: 'wood-rattan-side-table',
    name: 'Vazha Nesting Side Table',
    subtitle: 'Wood + Rattan Side Tables',
    category: 'Tables & Surfaces',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹18,500',
    materials: ['Solid Kerala Walnut', 'Handwoven Natural Cane Rattan', 'Brushed Brass Joinery'],
    dimensions: '48 cm diameter · 45 cm / 52 cm dual height',
    leadTime: 'Fulfills in 5–6 weeks direct from our craftsmen in Kerala',
    craftLocation: 'Thrissur & Nilambur workshops, Kerala',
    shortDescription: 'Turned wood and rattan side table with lift-off serving tray. Cylindrical cane drum base with interior book storage and portable solid walnut serving tray.',
    fullDescription: 'Designed specifically for living rooms that double as home offices and dining spaces. The Vazha Side Table pairs a hand-turned solid walnut serving top with a breathable natural cane drum base woven by traditional artisans in Kerala. Features our signature "Tray-dition" lift-off tray top and an open lower interior tailored to store art books and daily magazines.',
    spaceSolvingFeature: '"Tray-dition" Lift-Off & Serve: The removable wooden top doubles as a sturdy carry-around tray—perfect for bringing drinks from the kitchen to the couch without taking up extra apartment space. Hollow cane drum stores books and cushions.',
    craftDetails: 'Every tabletop and rim is turned on a traditional lathe by woodworkers with decades of experience, hand-sanded across three grits, and treated with cold-pressed natural linseed wax.',
    featureSpotlight: {
      title: '"Tray-dition" — Lift-Off & Serve',
      subtitle: 'Dual-Purpose Living for Compact Flats',
      description: 'The removable wooden top doubles as a sturdy carry-around tray—perfect for bringing drinks from the kitchen to the couch without taking up extra apartment space.',
      image: '/products/vazha-side-table-tray.jpg',
    },
    images: {
      hero: '/products/vazha-side-table-tray.jpg',
      gallery: [
        '/products/vazha-side-table-tray.jpg',
        '/products/vazha-side-table-tray-top.jpg',
        '/products/vazha-side-table-base.jpg',
        '/products/vazha-side-table-rattan-detail.jpg',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
  },
  {
    id: 's01-02',
    slug: 'clothing-rack-dresser-ottoman',
    name: 'Koodu Valet & Storage Ottoman',
    subtitle: 'Clothing Rack + Dresser + Ottoman',
    category: 'Wardrobe & Storage',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹22,000',
    materials: ['Steamed Solid Walnut', 'Woven Kerala Cane', 'Organic Linen Upholstery', 'Antiqued Brass Pins'],
    dimensions: '60 cm width · 38 cm depth · 165 cm height',
    leadTime: 'Fulfills in 5–6 weeks direct from our craftsmen in Kerala',
    craftLocation: 'Calicut & Thrissur, Kerala',
    shortDescription: 'Storage that looks like architectural decor. Walnut valet rack, vanity drop-shelf, and nested storage ottoman.',
    fullDescription: 'In apartments under 600 sq ft, conventional wardrobes consume precious visual air. The Koodu Valet unifies daily garment hanging, accessory organization, and hidden linen storage within a silhouette that occupies under 2.5 square feet of floor area. Includes a fold-down walnut vanity shelf and a cushioned ottoman that conceals daily clutter.',
    spaceSolvingFeature: 'Combines open rack, accessory valet, dressing mirror ledge, and hidden storage seating in a minimal 60cm span.',
    craftDetails: 'Constructed using traditional blind mortise-and-tenon joints without visible screws. The cane panels are soaked in rainwater cisterns before tension-weaving to ensure lifelong tautness.',
    images: {
      hero: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
  },
  {
    id: 's01-03',
    slug: 'the-flip-lounge',
    name: 'The Flip Lounge',
    subtitle: 'The Fold-Out Floor Cloud',
    category: 'Seating & Daybeds',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹24,500',
    materials: [
      'Multi-Density Ergonomic Core',
      'Rich Retro-Inspired Ribbed Corduroy',
      'Heavy-Duty Articulating Joint System',
      'Reinforced Bottom Webbing & Pull Loops',
    ],
    dimensions: '95 cm width · 100 cm depth (folded lounge) · 195 cm length (flat daybed)',
    leadTime: 'Fulfills in 4–5 weeks direct from our craftsmen in Kerala',
    craftLocation: 'Kochi & Thrissur workshops, Kerala',
    shortDescription: 'Designed for small spaces and big lounging. Fold it up to save space, or stretch it out to kick back and relax. Available in rich, retro-inspired fabric.',
    fullDescription: 'Designed for small spaces and big lounging. The Flip Lounge is the fold-out floor cloud engineered for modern apartment life. Fold it up into a structured, supportive lounge seat to save precious square footage—or stretch it out in seconds into an expansive floor daybed to kick back, play games, or host overnight guests.',
    spaceSolvingFeature: 'The Fold-Out Floor Cloud: Fold it up to save space, or stretch it out to kick back and relax. Transitions effortlessly between upright lounge chair and full floor daybed.',
    craftDetails: 'Hand-tailored by our workshop team in Kerala with high-resilience layered foam that retains its loft over time. Upholstered in rich, retro-inspired corduroy with contrast piping and heavy-duty concealed zips.',
    featureSpotlight: {
      title: '"The Flip Lounge" — The Fold-Out Floor Cloud',
      subtitle: 'Small Spaces. Big Lounging.',
      description: 'Designed for small spaces and big lounging. Fold it up to save space, or stretch it out to kick back and relax. Available in rich, retro-inspired fabric.',
      image: '/products/the-flip-lounge.jpg',
    },
    images: {
      hero: '/products/the-flip-lounge.jpg',
      gallery: [
        '/products/the-flip-lounge.jpg',
        '/products/the-flip-lounge-folded.jpg',
        '/products/the-flip-lounge-flat.jpg',
        '/products/the-flip-lounge-detail.jpg',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
  },
  {
    id: 's01-04',
    slug: 'slim-shady',
    name: 'Slim Shady',
    subtitle: 'Slim footprint. Big storage.',
    category: 'Wardrobe & Organizers',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹19,500',
    materials: ['Natural Woven Cane Rattan', 'Seasoned Solid Hardwood', 'Concealed Tilt-Out Pivot Hardware'],
    dimensions: '55 cm width · 18 cm depth · 170 cm height',
    leadTime: 'Fulfills in 4–5 weeks direct from our craftsmen in Kerala',
    craftLocation: 'Nilambur & Thrissur workshops, Kerala',
    shortDescription: 'Slim footprint. Big storage. Built with natural woven cane and sturdy wood, this vertical organizer makes the most of your apartment\'s unused wall space.',
    fullDescription: 'Built with natural woven cane and sturdy wood, this vertical organizer makes the most of your apartment\'s unused wall space. Tilt-out drawers store shoes without bulky doors blocking your walkway, while the upper grid keeps daily essentials right where you need them. Elegant, space-saving, and undeniably practical.',
    spaceSolvingFeature: 'Ultra-shallow 18cm profile with tilt-out shoe bins that open effortlessly without obstructing hallway walkways.',
    craftDetails: 'Handcrafted mortise joints with breathable cane rattan panels that naturally ventilate footwear in tropical and coastal climates.',
    featureSpotlight: {
      title: 'Slim Shady — Slim Footprint. Big Storage.',
      subtitle: 'Vertical Hallway & Bedroom Organizer',
      description: 'Built with natural woven cane and sturdy wood, this vertical organizer makes the most of your apartment\'s unused wall space. Tilt-out drawers store shoes without bulky doors blocking your walkway, while the upper grid keeps daily essentials right where you need them. Elegant, space-saving, and undeniably practical.',
      image: '/products/slim-shady.png',
    },
    images: {
      hero: '/products/slim-shady.png',
      gallery: [
        '/products/slim-shady.png',
        '/products/slim-shady-drawers.png',
        '/products/slim-shady-grid.png',
        '/products/slim-shady-detail.png',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
  },
  {
    id: 's01-05',
    slug: 'the-360-wardrobe',
    name: 'The 360 Wardrobe',
    subtitle: 'Now you see it. Now you don’t. 🔍',
    category: 'Wardrobe & Mirrors',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹24,000',
    materials: ['Full-Length Distortion-Free Silver Mirror', 'Solid Timber Column', 'Heavy-Duty 360° Steel Turntable Bearing', 'Antiqued Brass Pegs'],
    dimensions: '45 cm diameter base · 175 cm height',
    leadTime: 'Fulfills in 4–5 weeks direct from our craftsmen in Kerala',
    craftLocation: 'Calicut & Thrissur workshops, Kerala',
    shortDescription: 'Now you see it. Now you don’t. Behind this full-length mirror lies a secret outfit-planning stash. Just spin it 360° to grab your coat, pick out your bag, and reach your shoes.',
    fullDescription: 'Now you see it. Now you don’t. 🔍 Behind this full-length mirror lies a secret outfit-planning stash. Just spin it 360° to grab your coat, pick out your bag, and reach your favorite shoes—then spin it back for a final fit check. Saving space never looked this good.',
    spaceSolvingFeature: 'Smooth 360° swivel turntable integrates a full-length dressing mirror, garment hanging rail, accessory valet, and multi-tier shoe shelving in a single circular footprint.',
    craftDetails: 'Weighted solid wood circular pedestal anchored with whisper-silent industrial ball-bearing swivel mechanism tested for over 50,000 rotations.',
    featureSpotlight: {
      title: 'The 360 Wardrobe — Now you see it. Now you don’t. 🔍',
      subtitle: 'Secret Swivel Outfit Planning Station',
      description: 'Behind this full-length mirror lies a secret outfit-planning stash. Just spin it 360° to grab your coat, pick out your bag, and reach your favorite shoes—then spin it back for a final fit check. Saving space never looked this good.',
      image: '/products/the-360-wardrobe.png',
    },
    images: {
      hero: '/products/the-360-wardrobe.png',
      gallery: [
        '/products/the-360-wardrobe.png',
        '/products/the-360-wardrobe-stash.png',
        '/products/the-360-wardrobe-mirror.png',
        '/products/the-360-wardrobe-base.png',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
  },
  {
    id: 's01-06',
    slug: 'the-hover-desk',
    name: 'The Hover Desk',
    subtitle: 'The desk that moves with you.',
    category: 'Desks & Workstations',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹16,500',
    materials: ['Warm Solid Walnut & Hardwood', 'Articulating Angle-Lock Laptop Stand', 'Concealed Smooth-Glide Casters'],
    dimensions: '100 cm width · 40 cm depth · 78–88 cm clearance height',
    leadTime: 'Fulfills in 4 weeks direct from our craftsmen in Kerala',
    craftLocation: 'Thrissur workshops, Kerala',
    shortDescription: 'The desk that moves with you. Roll it over your bed for a morning email session with a tilted laptop stand, then tuck it away flush against your wall.',
    fullDescription: 'The desk that moves with you. Roll it over your bed for a morning email session with a tilted laptop stand, then tuck it away flush against your wall or dresser when the workday is done. Crafted from warm wood, it’s the ultimate space-saver for the modern apartment.',
    spaceSolvingFeature: 'Cantilevered over-bed bridge design with silent rolling casters and built-in adjustable tilt stand. Stows flush over console tables or beds.',
    craftDetails: 'Precision counterbalanced frame joined with blind mortise joinery in Kerala hardwood. Hand-rubbed linseed oil and beeswax finish.',
    featureSpotlight: {
      title: 'The Hover Desk — The Desk That Moves With You',
      subtitle: 'Mobile Over-Bed & Wall Console Workstation',
      description: 'Roll it over your bed for a morning email session with a tilted laptop stand, then tuck it away flush against your wall or dresser when the workday is done. Crafted from warm wood, it’s the ultimate space-saver for the modern apartment.',
      image: '/products/the-hover-desk.png',
    },
    images: {
      hero: '/products/the-hover-desk.png',
      gallery: [
        '/products/the-hover-desk.png',
        '/products/the-hover-desk-stand.png',
        '/products/the-hover-desk-bed.png',
        '/products/the-hover-desk-wood.png',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
  },
  {
    id: 's01-07',
    slug: 'the-piano-rack',
    name: 'The Piano Rack',
    subtitle: 'Shelf on top. Hidden hooks below. 🌿',
    category: 'Entryway & Wall Racks',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹3,400',
    materials: ['Hand-Carved Solid Kerala Timber', 'Flip-Down Weighted Key Slats', 'Concealed Magnetic Retention Pins'],
    dimensions: '80 cm width · 14 cm depth · 16 cm height',
    leadTime: 'In stock · Ships within 3 business days',
    craftLocation: 'Thrissur & Nilambur workshops, Kerala',
    shortDescription: 'Shelf on top. Hidden hooks below. 🌿 Perfect for tight entryways and small bedrooms. Style your favorite plants on top, and flip down wooden slats to hang essentials.',
    fullDescription: 'Shelf on top. Hidden hooks below. 🌿 Perfect for tight entryways and small bedrooms. Style your favorite plants and decor on the top ledge, and flip down the wooden slats to hang your daily essentials. Maximum utility, zero visual clutter.',
    spaceSolvingFeature: 'Flush-folding piano keys hook system. When empty, slats stay folded up completely flat, transforming the rack into a sleek floating display shelf.',
    craftDetails: 'Each wooden key is individually hand-beveled and weighted for smooth tactile flip-down motion. Concealed neodymium magnets hold unused keys firmly upright.',
    featureSpotlight: {
      title: 'The Piano Rack — Shelf on top. Hidden hooks below. 🌿',
      subtitle: 'Zero Visual Clutter Entryway Architecture',
      description: 'Perfect for tight entryways and small bedrooms. Style your favorite plants and decor on the top ledge, and flip down the wooden slats to hang your daily essentials. Maximum utility, zero visual clutter.',
      image: '/products/the-piano-rack.png',
    },
    images: {
      hero: '/products/the-piano-rack.png',
      gallery: [
        '/products/the-piano-rack.png',
        '/products/the-piano-rack-shelf.png',
        '/products/the-piano-rack-hooks.png',
        '/products/the-piano-rack-detail.png',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 50,
  },
];

export interface Accessory {
  id: string;
  name: string;
  category: string;
  price: string;
  materials: string;
  description: string;
  image: string;
  inStock: boolean;
}

export const accessories: Accessory[] = [
  {
    id: 'acc-01',
    name: 'Kallu Peg Rail (Set of 4)',
    category: 'Wall Hooks',
    price: '₹1,250',
    materials: 'Solid Kerala Walnut & Turned Brass',
    description: 'Flush-mount cylindrical wall pegs with beveled edges to hold heavy coats, bags, and planters without bending.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'acc-02',
    name: 'Thadi Sculpted Coat Hanger (3-Pack)',
    category: 'Wardrobe Accessories',
    price: '₹1,800',
    materials: 'Hand-carved Teak with Linseed Wax finish',
    description: 'Ergonomically contoured shoulders made from offcuts of our Season 01 furniture production. Zero timber waste.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'acc-03',
    name: 'Nira Fold-Flat Shoe Rack',
    category: 'Entryway Solutions',
    price: '₹2,850',
    materials: 'Slatted Solid Wood & Brass Dowels',
    description: 'Holds 6 pairs of shoes across two tiers. Folds completely flat to 4cm depth when storing away or shifting flats.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'acc-04',
    name: 'Muri Woven Rattan Valet Tray',
    category: 'Tabletop Organization',
    price: '₹1,400',
    materials: 'Natural Rattan Cane & Walnut Rim',
    description: 'Catch-all tray for keys, glasses, and daily carry items. Hand-plaited by women craft collectives in Alappuzha.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'acc-05',
    name: 'The Piano Rack',
    category: 'Wall Hooks & Ledges',
    price: '₹3,400',
    materials: 'Hand-Carved Solid Timber & Flip-Down Slat Keys',
    description: 'Shelf on top. Hidden hooks below. 🌿 Style your favorite plants on top, and flip down wooden slats to hang essentials. Zero visual clutter.',
    image: '/products/the-piano-rack.png',
    inStock: true,
  },
];
