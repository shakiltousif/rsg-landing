import type { Testimonial, FAQ } from '@/types'

// Hero Section Content
export const heroContent = {
  headline: 'Your Professional Rideshare Business Starts Here',
  subheadline:
    'Join thousands of professional drivers and riders who are building direct connections on the only social media platform exclusively designed for the gig economy.',
  primaryCTA: {
    text: 'Get Your Free RSG Membership + Digital Business Card',
    href: '#signup',
  },
  secondaryCTA: {
    text: 'Learn More',
    href: '#how-it-works',
  },
  benefits: [
    'Always Free Membership',
    'For Drivers & Riders Worldwide',
    'Build Your Transportation Business',
    'Connect Locally, Grow Globally',
  ],
}

// Testimonials
export const testimonials: Testimonial[] = [
  {
    quote:
      'The RSG Digital Business Card changed my business. I went from 100% platform rides to 40% direct bookings in 6 months. I\'m earning $800+ more per month just from repeat clients.',
    author: 'Jennifer M.',
    role: 'driver',
    location: 'Houston, TX',
  },
  {
    quote:
      'Finding professional drivers used to mean hoping I\'d get the same person twice. Now I have 3 drivers saved in RSG, and I book whoever\'s available. Better service, better prices.',
    author: 'David K.',
    role: 'rider',
    location: 'Miami, FL',
  },
  {
    quote:
      'I thought I needed expensive software to run a real transportation business. RSG gave me everything I need—booking system, business card, directory listing—for free. My Personal Driver ID # alone is worth the membership.',
    author: 'Marcus T.',
    role: 'driver',
    location: 'Atlanta, GA',
  },
  {
    quote:
      'As a rider, I love supporting drivers directly. The RSG Directory makes it easy to find verified, professional drivers, and booking through The Don Reservations is just as simple as using Uber.',
    author: 'Sarah L.',
    role: 'rider',
    location: 'Seattle, WA',
  },
]

// Membership Comparison Table
export const membershipComparison = {
  features: [
    'Digital Business Card',
    'Personal Driver ID #',
    'Direct Booking System',
    'Directory Listing',
    'Industry Network',
    'Educational Content',
    'Community Forums',
  ],
  providers: {
    rsg: {
      name: 'RSG (FREE)',
      features: [true, true, true, true, true, true, 'Coming Soon'],
      highlight: true,
    },
    blinq: {
      name: 'Blinq/HiHello',
      features: ['$99-299/year', false, false, 'Paid tiers', 'General', false, false],
    },
    platforms: {
      name: 'Uber/Lyft',
      features: [false, false, '25-40% fee', false, false, 'Limited', false],
    },
    social: {
      name: 'Generic Social',
      features: [false, false, false, false, 'Mixed', false, 'Algorithm-buried'],
    },
  },
  value: {
    annual: '$500-1,200+',
    cost: '$0',
  },
}

// Sample FAQ Structure - Categorized
export const faqsForDrivers = {
  moneyEarnings: [
    {
      question: 'How much can I really make with The Don Reservations system?',
      answer:
        'Here\'s what our members are seeing: Drivers who actively share their RSG Digital Business Card convert 15-30% of riders into direct bookings. Conservative example: Give your card to 100 riders over 2 months, 20 riders save your info (20% conversion), each books you 2x per month at $30 average fare. That\'s $1,200/month in direct bookings at 100% earnings (vs ~$780 if these were Uber rides). Top performers are earning $2,000-4,000/month in direct bookings within 6 months.',
    },
    {
      question: 'Do I have to stop driving for Uber and Lyft?',
      answer:
        'Not at all! Best strategy: Phase 1 (Months 1-2): Drive normally on Uber/Lyft, share your RSG card with every rider. Phase 2 (Months 3-4): Start getting direct bookings, keep platform driving during slow times. Phase 3 (Months 5+): Many drivers shift to 60% direct / 40% platform. Think of RSG as a supplement, not a replacement.',
    },
    {
      question: 'What does "100% of the fare" really mean? Are there ANY fees?',
      answer:
        'You keep literally 100% of what the rider pays you. No platform commission (Uber/Lyft take 25-40%), no service fees, no hidden charges, no payment processing fees (you arrange payment directly with rider—cash, Venmo, Zelle, card reader, whatever works for you). If a rider pays you $50, you keep $50. Simple.',
    },
  ],
  digitalCard: [
    {
      question: 'What exactly is the RSG Digital Business Card?',
      answer:
        'Think of it as your mobile billboard, business card, and booking system combined. It\'s a professional web page (accessible via QR code and link) that includes: Your professional photo and vehicle picture, your exclusive Personal Driver ID #, QR code for instant bookings, direct link to The Don Reservations system, shareable across all social platforms, and you\'re listed in the RSG Global Drivers Directory.',
    },
    {
      question: 'How is this different from giving someone my phone number?',
      answer:
        'Huge difference. Your phone number is just contact info. Your RSG Digital Business Card is: ✓ Professional branding - Looks like a real business, not just a guy with a phone ✓ Easy rebooking - They click "Book Now" instead of texting back and forth ✓ Credibility - Shows you\'re verified, insured, and professional ✓ Shareable - They can forward your card to friends ✓ Searchable - Listed in RSG Directory so new riders find you ✓ Updatable - Change your info once, it updates everywhere.',
    },
  ],
}

export const faqsForRiders = {
  pricingSavings: [
    {
      question: 'Will I save money booking drivers directly through RSG vs. using Uber/Lyft?',
      answer:
        'Usually yes. Drivers don\'t pay 25-40% commission, so they can charge less and still earn more. Real example: Uber fare: $45 (you pay $45, driver gets ~$29). Direct booking: $35 (you pay $35, driver gets $35). You save: $10, Driver earns: $6 more. No surge pricing surprises, and many drivers offer discounts for repeat clients.',
    },
    {
      question: 'How do I pay the driver?',
      answer:
        'Drivers choose their accepted payment methods (you see them before booking). Common options: Venmo, Zelle, Cash App (instant, no fees), Credit/debit card (if driver has card reader), Cash (always an option), Corporate billing (for business accounts). You arrange payment directly with the driver.',
    },
  ],
  safetyTrust: [
    {
      question: 'How do I know RSG drivers are safe and legitimate?',
      answer:
        'Multiple verification layers: ✓ Commercial insurance verified (uploaded and checked) ✓ Personal Driver ID # issued (only after verification) ✓ Background checks (completed before ID issuance) ✓ Vehicle registration (verified current and valid) ✓ Real reviews (only from verified ride completions) ✓ City-specific licenses (TLC, TCP, etc. where required). Plus: You can see the driver\'s full profile, photo, vehicle, and history BEFORE you book.',
    },
  ],
}

export const faqsGeneral: FAQ[] = [
  {
    question: 'Is RSG membership really free forever?',
    answer:
      'Yes, core membership is always free for both drivers and riders. Always Free: RSG membership, Digital Business Card creation, Directory listing, Community forums and networking, Basic booking through The Don Reservations. Optional paid features (coming later): Premium directory placement, Advanced analytics for drivers, Corporate fleet management tools, Priority customer support.',
  },
  {
    question: 'What cities is RSG available in?',
    answer:
      'RSG is available globally, but driver density varies by city. High driver density (100+ drivers): Major US cities (New York, Los Angeles, Chicago, Miami, Atlanta, Dallas, Houston, Phoenix, etc.). Growing markets (20-99 drivers): Mid-size US cities, Canadian cities, UK cities, Australian cities. Emerging markets (1-19 drivers): Smaller cities, international expansion areas. Check your city by searching the RSG Directory.',
  },
]

// Contact Information
export const contactInfo = {
  email: 'support@rideshareguides.com',
  liveChat: 'Available 7am-10pm ET',
  socialMedia: {
    youtube: 'https://youtube.com/@rideshareguides',
    facebook: 'https://facebook.com/rideshareguides',
    instagram: 'https://instagram.com/rideshareguides',
    tiktok: 'https://tiktok.com/@rideshareguides',
  },
}

// Section-specific content
export const sections = {
  digitalBusinessCard: {
    forDrivers: {
      title: 'For Drivers: Your Professional Identity',
      benefits: [
        'Professional headshot and vehicle photo',
        'Your exclusive Personal Driver ID #',
        'QR code for instant bookings',
        'Direct link to The Don Reservations system',
        'Shareable across all social platforms',
        'Listed in the RSG Global Drivers Directory',
      ],
      value: 'Professional digital business cards cost $99-299/year elsewhere. Yours is included FREE with RSG membership.',
      howItWorks:
        'Share your card after every ride, post it on social media, or let riders find you in our directory. Every scan is a potential repeat customer—building YOUR business, not a platform\'s.',
    },
    forRiders: {
      title: 'For Riders: Find Your Perfect Driver',
      description:
        'Find and book your favorite professional drivers directly. Browse the RSG Drivers Directory to discover vetted, commercially-insured drivers in your area, view their professional profiles, and save their contact information for future bookings.',
    },
  },
  communityInfluencers: {
    title: 'RSG Community of Influencers',
    subtitle: 'Learn from the Best in the Business',
    leaders: [
      {
        title: 'YouTube Creators',
        description: 'Weekly income strategies, tax tips, and market insights',
      },
      {
        title: 'Facebook Group Moderators',
        description: 'Live Q&As and success story features',
      },
      {
        title: 'Top Earners',
        description: 'Exact methods used to maximize income',
      },
      {
        title: 'Market Specialists',
        description: 'Airport strategies, surge tactics, and premium service techniques',
      },
    ],
    benefits: [
      'Exclusive content from proven earners',
      'Weekly strategy sessions and AMAs',
      'Behind-the-scenes looks at six-figure driver businesses',
      'Direct access to mentors who have built what you are building',
    ],
  },
  donReservations: {
    title: 'The Don Reservations App',
    subtitle: 'Built by Drivers, For Drivers—Technology That Puts YOU First',
    description:
      'The reservation technology you\'ve been waiting for—working just like Uber and Lyft, but with one critical difference: YOU keep 100% of every fare.',
    whyYouNeedIt: [
      {
        title: 'Build Your Own Business',
        description:
          'Stop building wealth for platforms. Every client you convert becomes YOUR customer, not Uber\'s or Lyft\'s.',
      },
      {
        title: 'Secure Your Personal Driver ID #',
        description:
          'Your unique identifier in the RSG ecosystem—your professional credential that proves you\'re verified, commercially-insured, and cannot be replicated.',
      },
      {
        title: 'Familiar Technology, Better Economics',
        description:
          'Riders use the same simple booking process they know. You use professional-grade dispatch tools. The difference? You are the business owner.',
      },
    ],
    steps: [
      'Join RideshareGuides.com (FREE)',
      'Verify your commercial insurance',
      'Receive your exclusive Personal Driver ID #',
      'Activate your RSG Digital Business Card',
      'Start accepting direct bookings',
    ],
  },
  comingSoon: [
    {
      icon: 'MessageSquare',
      title: 'Forums',
      features: [
        'Market-specific forums (New York, LA, Chicago, etc.)',
        'Vehicle advice and maintenance',
        'Tax and business strategy',
        'Customer service excellence',
      ],
    },
    {
      icon: 'ShoppingBag',
      title: 'Classifieds',
      features: [
        'Vehicles for sale (rideshare-ready)',
        'Lease takeovers and financing options',
        'Equipment and accessories',
        'Partnership opportunities',
      ],
    },
    {
      icon: 'Plane',
      title: 'Flight Information',
      features: [
        'Live flight arrivals and delays',
        'Best pickup/dropoff strategies',
        'Airport queue times and tips',
        'Airline passenger volume trends',
      ],
    },
    {
      icon: 'BookOpen',
      title: 'RSG Blogs',
      features: [
        'Complete Don Reservations tutorials',
        'Business growth strategies and case studies',
        'Marketing your services effectively',
        'Building a six-figure rideshare business',
      ],
    },
  ],
}
