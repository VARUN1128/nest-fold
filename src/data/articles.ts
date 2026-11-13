export interface JournalArticleData {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  heroImage: string;
  content: {
    heading?: string;
    body: string[];
    quote?: string;
    quoteAuthor?: string;
    subImage?: string;
  }[];
}

export const journalArticles: JournalArticleData[] = [
  {
    id: 'art-01',
    slug: 'living-beautifully-in-350-sq-ft',
    title: 'Living beautifully in 350 sq ft.',
    category: 'City Living',
    readTime: '4 min read',
    date: 'November 2026',
    author: 'Editorial Desk',
    excerpt: 'Most furniture for compact apartments looks like emergency camping equipment or medical supplies. How we rethink volume, air, and materials for modern Indian renters.',
    heroImage: 'https://images.unsplash.com/photo-1502005229762-ee1b2b92e584?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'The False Choice Between Function and Dignity',
        body: [
          'In Mumbai, Bengaluru, and Kochi, urban flats are contracting in square footage while climbing in rent. When young couples and professionals sign a lease for 380 or 520 square feet, they are met with a dispiriting retail landscape: either disposable chipboard items with plastic laminates that swell within two monsoons, or bulky ancestral teak suites built for ancestral bungalows.',
          'The result is a compromise that hurts the eye. Space-saving furniture has historically treated space efficiency as a purely mechanical problem—wire racks, fold-down metal cots, and hollow plastic drawers that rattle whenever you set a coffee cup down.',
        ],
        quote: 'My apartment is 400 sq ft. I need furniture that folds away — but everything looks like a hospital bed.',
        quoteAuthor: 'Nest & Fold City Renter Survey, 2026',
      },
      {
        heading: 'Weight, Sightlines, and Floating Surfaces',
        body: [
          'The secret to making a compact flat feel expansive is not painting everything clinical white. It is managing ground contact and transparency. When furniture sits on slender, tapered legs or incorporates open-weave cane, light flows underneath and through the object.',
          'By elevating solid wood surfaces and allowing eyes to see the floorboards stretching to the skirting board, a 350-square-foot room retains its breadth. A nest of side tables that collapses into 48 centimeters of cylindrical silhouette frees up floor space during yoga mornings, yet expands smoothly to host four guests for dinner in the evening.',
        ],
        subImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
      },
      {
        heading: 'Furniture That Retires Gracefully',
        body: [
          "Everything we craft is tested against what we call the \"Three-Turn Test\": can a single person move, unpack, and assemble this piece without power tools when their lease renews in eleven months? If the answer is no, it doesn't make Season 01.",
          'True luxury in city living isn’t having endless empty rooms. It is living with pieces so thoughtfully engineered and beautifully made that every square foot feels intentional.',
        ],
      },
    ],
  },
  {
    id: 'art-02',
    slug: 'the-art-of-working-with-rattan',
    title: 'The art of working with rattan.',
    category: 'Craftsmanship',
    readTime: '5 min read',
    date: 'October 2026',
    author: 'Craft Heritage Series',
    excerpt: 'Cane and rattan are often relegated to nostalgic planter chairs. In Season 01, we treat this ancient tropical vine as a precision architectural material.',
    heroImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'The Breathing Membrane',
        body: [
          'Rattan (or Calamus) is one of nature’s most miraculous structural materials. A thorny climbing palm indigenous to tropical ecosystems, its core combines high tensile elasticity with low thermal inertia. Unlike synthetics or cold sheet steel, rattan breathes.',
          'In India’s humid coastal and monsoon climates, solid wood panels can warp if sealed against natural atmospheric cycling. By pairing dense, stable solid walnut perimeters with hand-stretched rattan webbing, our pieces release trapped humidity while offering gentle, yielding ergonomics.',
        ],
        quote: 'Rattan does not fight the climate. It breathes with the humidity and tightens in the breeze.',
        quoteAuthor: 'Master Weaver, Alappuzha Cluster',
      },
      {
        heading: 'Tension, Water, and Patience',
        body: [
          'The process begins with split cane peels graded by thickness. Before weaving into our side tables and wardrobe panels, every cane strand is submerged in natural rainwater cisterns for twenty-four hours to soften its fibers.',
          'Weavers work while the cane is wet, pulling diagonal octagonal open-mesh patterns by hand. As the mesh dries in shaded courtyards, the fibers shrink by roughly 4%, pulling the weave drum-tight across the hardwood rebate. This natural tensioning provides decades of resilient support without sagging.',
        ],
        subImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
      },
      {
        heading: 'A Modern Architectural Contrast',
        body: [
          'By juxtaposing warm, golden rattan mesh against the deep, grounded tones of oiled walnut, our Season 01 pieces bridge traditional Kerala verandah heritage and clean Scandinavian minimalism.',
          'It is neither rustic cottage kitsch nor sterile factory modernism. It is organic, tactile, and made to outlive trends.',
        ],
      },
    ],
  },
  {
    id: 'art-03',
    slug: 'inside-the-workshops-of-kerala',
    title: 'Inside the workshops of Kerala.',
    category: 'Origin Story',
    readTime: '6 min read',
    date: 'September 2026',
    author: 'Kerala Lineage Journal',
    excerpt: 'Centuries of joinery expertise passed from master to apprentice. How our direct artisan partnerships in Thrissur and Nilambur shape every piece of Nest & Fold.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Centuries of Timber Knowledge',
        body: [
          'Kerala’s woodworking tradition is rooted in the ancient building sciences of the Thatchu Shastra—the science of timber carpentry. From traditional snake boats (chundan vallam) that endure centuries of water stress to the ornate timber ceilings of old Padmanabhapuram structures, wood has always been Kerala’s master medium.',
          'In workshops nestled along the timber belt of Nilambur and Thrissur, woodworkers don’t merely follow technical drawings. They read the grain with their fingertips, identifying knots, directional tensions, and moisture lines that no computer-aided CNC machine can detect.',
        ],
        quote: 'Turned on a lathe by our woodworker in Thrissur. You feel the human touch in every bevel.',
        quoteAuthor: 'Nest & Fold Brand Book',
      },
      {
        heading: 'The 30-Year Guild Relationships',
        body: [
          'Unlike commercial furniture companies that broker deals through middlemen or import prefabricated flat-packs from overseas factories, Nest & Fold works directly with independent craft families and cooperative woodworking studios.',
          'These multi-generational woodworkers bring three decades of tool mastery to our small-batch drops. Rather than forcing them onto high-speed assembly lines, we set strict limits: Season 01 is capped at 75 numbered pieces. This gives each maker the time required to hand-scrape mortise joints and apply hand-rubbed wax coatings that let the timber breathe.',
        ],
        subImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
      },
      {
        heading: 'From the Malabar Coast to Compact City Flats',
        body: [
          'Every completed piece carries a hand-stamped brass badge denoting its batch number and craft origin. When a piece arrives in an apartment in Indiranagar, Bandra, or Kakkanad, it carries the scent of seasoned timber and the quiet pride of hands that know wood.',
        ],
      },
    ],
  },
];
