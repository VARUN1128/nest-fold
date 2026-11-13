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
    shortDescription: 'Turned wood side table with handwoven rattan companion. Dual-tiered nesting structure that tucks away in seconds.',
    fullDescription: 'Designed specifically for living rooms that double as home offices and dining spaces. The Vazha Nesting Side Table pairs hand-turned solid walnut with breathable natural cane mesh woven by traditional artisans in Kerala. The secondary table nests cleanly beneath the primary surface without scraping or resistance, sliding out smoothly when company arrives.',
    spaceSolvingFeature: 'Nests down to a single 48cm cylinder footprint. Slides out to double tabletop area instantly.',
    craftDetails: 'Every tabletop is turned on a traditional lathe by woodworkers with decades of experience, hand-sanded across three grits, and treated with cold-pressed natural linseed wax.',
    images: {
      hero: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80',
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
      hero: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
  },
  {
    id: 's01-03',
    slug: 'convertible-sofa-bed',
    name: 'Iruppu Convertible Daybed',
    subtitle: 'Convertible Sofa Bed',
    category: 'Seating & Daybeds',
    season: 'Season 01 — The Compressed City',
    indicativePrice: '₹26,500',
    materials: ['Seasoned Solid Timber Frame', 'Woven Cane Backing', 'Organic Cotton-Linen Canvas', 'Natural Latex Core'],
    dimensions: '190 cm width · 82 cm depth (extends to 140 cm bed)',
    leadTime: 'Fulfills in 6 weeks direct from our craftsmen in Kerala',
    craftLocation: 'Ernakulam & Thrissur workshops, Kerala',
    shortDescription: 'Space-saving meets artisan design. Transforms seamlessly from a tailored 3-seater couch into a queen floor daybed.',
    fullDescription: 'Never looks like a hospital cot or a metal contraption. The Iruppu Sofa Bed honors the calm dignity of traditional Kerala veranda daybeds (Charupadi) while introducing a counterbalance slide mechanism that glides forward with one hand. Finished with breathable rattan lattice along the backrest to keep air circulating during humid coastal nights.',
    spaceSolvingFeature: 'One-hand sliding platform converts from living sofa to sleep bed without moving the frame away from the wall.',
    craftDetails: 'The internal slide system uses dry-waxed hardwood tracks rather than noisy steel hinges, guaranteeing silent longevity and seamless conversion year after year.',
    images: {
      hero: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    dropStatus: 'Limited Drop',
    batchSize: 25,
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
];
