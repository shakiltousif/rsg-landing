import type { Testimonial, FAQ } from '@/types'

// Hero Section Content
export const heroContent = {
  headline: 'Your Professional Transportation Business Starts Today',
  subheadline:
    'Join thousands of professional drivers and riders who are building direct connections on the only social media platform exclusively designed for the gig economy.',
  primaryCTA: {
    text: 'Join RSG Free + Get Digital Card',
    href: '#signup',
  },
  secondaryCTA: {
    text: 'Book a Ride Now',
    href: 'https://BookTheDon.com',
  },
  benefits: [
    'Always Free Membership',
    'For Drivers & Riders Worldwide',
    'Build Your Transportation Business',
    'Connect Locally, Grow Globally',
  ],
  riderCTA: {
    text: 'Need a Ride? Book at BookTheDon.com',
    href: 'https://BookTheDon.com',
  },
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
    'RSG Digital Business Card',
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
        'Here\'s what our members are seeing: Drivers who actively share their RSG Digital Business Card convert 15-30% of riders into direct bookings. Conservative example: Give your card to 100 riders over 2 months, 20 riders save your info (20% conversion), each books you 2x per month at $30 average fare. That\'s $1,200/month in direct bookings at 100% earnings. Top performers are earning $2,000-4,000/month in direct bookings within 6 months.',
    },
    {
      question: 'Do I have to stop driving for Uber and Lyft?',
      answer:
        'Not at all! Best strategy: Phase 1 (Months 1-2): Drive normally on Uber/Lyft, share your RSG card with every rider. Phase 2 (Months 3-4): Start getting direct bookings, keep platform driving during slow times. Phase 3 (Months 5+): Many drivers shift to 60% direct / 40% platform. Think of RSG as a supplement, not a replacement.',
    },
    {
      question: 'What does "100% of the fare" really mean? Are there ANY fees?',
      answer:
        'You keep literally 100% of what the rider pays you. No platform commission (Uber/Lyft take 25-40%), no service fees, no hidden charges, no payment processing fees (you arrange payment directly with rider—cash, Venmo, Zelle, card reader). If a rider pays you $50, you keep $50. Simple.',
    },
    {
      question: 'How do I get paid by riders who book through The Don Reservations?',
      answer:
        'YOU choose your payment methods. Most drivers accept Cash, Venmo, Zelle, Cash App (instant, no fees), or card readers like Square/Stripe (~2.9% fee). You set your payment preferences in your RSG profile, and riders see them before booking.',
    },
    {
      question: 'Can I charge more than Uber/Lyft rates for direct bookings?',
      answer:
        'Yes! Many drivers charge 10-20% LESS than Uber\'s price (since there\'s no platform fee) and still make MORE money. Others offer premium services (luxury vehicles, airport specialists) and charge MORE. You decide your pricing strategy.',
    },
  ],
  digitalCard: [
    {
      question: 'What exactly is the RSG Digital Business Card?',
      answer:
        'Think of it as your mobile billboard, business card, and booking system combined. It\'s a professional web page that includes your photo, vehicle info, Personal Driver ID #, booking button, ratings, and contact info. It allows for instant, professional booking.',
    },
    {
      question: 'How is this different from giving someone my phone number?',
      answer:
        'Your phone number is just contact info. Your RSG Digital Business Card is professional branding, allows easy rebooking ("Book Now" button), provides credibility (verified/insured status), is easily shareable, and is searchable in the RSG Directory.',
    },
    {
      question: 'I already have a business card from Vistaprint. Why do I need this?',
      answer:
        'Paper cards get lost, have no clickable booking link, and can\'t be updated. Your RSG Digital Business Card lives on riders\' phones, allows instant booking, can be updated anytime, and is discoverable in the Directory. Pro tip: Use BOTH. Hand riders a paper card with your QR code linking to your digital card.',
    },
    {
      question: 'Can I customize my business card?',
      answer:
        'Yes! You control your business name, photos, services offered, coverage area, bio, contact preferences, and pricing info. Your Personal Driver ID # stays the same as your unique identifier.',
    },
  ],
  driverId: [
    {
      question: 'What exactly is a Personal Driver ID # and why do I need one?',
      answer:
        'Your Personal Driver ID # is your unique professional identifier in the RSG ecosystem (like #RSG-4782). Riders use it to book YOU specifically, it proves you\'re verified and commercially insured, and it cannot be faked.',
    },
    {
      question: 'How do I get my Personal Driver ID #?',
      answer:
        '1. Join RSG (free). 2. Upload proof of commercial insurance. 3. Complete identity verification. Once approved (24-48 hours), your ID is issued. NYC TLC drivers must also upload their active TLC license.',
    },
    {
      question: 'Can I choose my own Driver ID #?',
      answer:
        'IDs are assigned sequentially to ensure uniqueness. However, you CAN choose a custom business name that appears WITH your ID, like "Premium Rides NYC • Driver #RSG-4782".',
    },
    {
      question: 'What if I let my insurance lapse or move to another state?',
      answer:
        'Your ID is tied to your verified status. If insurance lapses, your ID is suspended until re-verified. If you move, update your insurance and re-verify for the new state to keep your ID.',
    },
  ],
  donReservations: [
    {
      question: 'Is The Don Reservations app hard to learn?',
      answer:
        'If you can use Uber/Lyft, you can use The Don Reservations. It\'s actually simpler—no surge zones, no acceptance rate pressure, no random pings. Most drivers are booking rides within 10 minutes of setup.',
    },
    {
      question: 'How do riders book me through The Don Reservations?',
      answer:
        '1. Direct ID Booking (rider enters your ID #). 2. QR Code (rider scans your card). 3. RSG Directory (rider finds your profile). All methods book YOU directly.',
    },
    {
      question: 'What happens if I\'m already booked when someone tries to reserve me?',
      answer:
        'Your calendar shows availability. If you\'re booked, riders see you are unavailable and can request a different time, join your waitlist, or see suggested alternative drivers.',
    },
    {
      question: 'Can I use The Don Reservations for airport pickups?',
      answer:
        'Absolutely! It includes flight tracking (monitors delays automatically) and allows for advance bookings, making it perfect for airport runs.',
    },
    {
      question: 'Do I need a special license or permits?',
      answer:
        'Requirements vary by location. All drivers need a valid license and commercial rideshare insurance. Specific cities (like NYC, Chicago) have additional requirements (TLC license, chauffeur license).',
    },
    {
      question: 'What if someone books me and doesn\'t show up?',
      answer:
        'YOU set your cancellation and no-show policies (e.g., 24hr notice for refund). Since you arrange payment directly, you can enforce your own policies (e.g., keeping a deposit).',
    },
  ],
  community: [
    {
      question: 'Is RSG just another Facebook group for drivers?',
      answer:
        'No. Facebook groups are unstructured and algorithm-driven. RSG is a professional association with verified profiles, integrated business tools (booking, directory), searchable forums, and no ads/algorithm hiding your content.',
    },
    {
      question: 'How can networking with other drivers help me make more money?',
      answer:
        'Drivers earn 30-40% more by sharing profitable strategies, getting referrals from overbooked drivers, and collaborating on large events.',
    },
    {
      question: 'Won\'t other drivers in my city be my competition?',
      answer:
        'Success-minded drivers know there is more demand than any single driver can handle. Sharing builds a referral network and reputation. Collaboration leads to more income.',
    },
    {
      question: 'Can I message other drivers directly on RSG?',
      answer:
        'Yes! RSG includes direct messaging, group chats, and forum threads. You can connect with mentors and peers in your city.',
    },
  ],
  directory: [
    {
      question: 'How do riders find me in the Directory?',
      answer:
        'Riders search by location, vehicle type, services, availability, ratings, language, and special needs. Your profile includes keywords to help you appear in relevant searches.',
    },
    {
      question: 'Do I have to pay extra to be listed in the Directory?',
      answer:
        'No. Directory listing is included FREE with RSG membership.',
    },
    {
      question: 'What if I only want to accept direct bookings from existing clients?',
      answer:
        'You can set your profile to "Private" (only people with your link can see you) or "Existing clients only". Most drivers start Public to build a client base.',
    },
    {
      question: 'Can riders leave reviews on my Directory listing?',
      answer:
        'Yes, but only VERIFIED riders who have completed a booking with you. This prevents fake reviews and builds real credibility.',
    },
  ],
}

export const faqsForRiders = {
  pricingSavings: [
    {
      question: 'Will I save money booking drivers directly through RSG vs. using Uber/Lyft?',
      answer:
        'Usually yes. Drivers don\'t pay 25-40% commission, so they can charge less and still earn more. There is no surge pricing, and many drivers offer discounts for repeat clients.',
    },
    {
      question: 'How do I pay the driver?',
      answer:
        'Drivers choose their accepted payment methods (Venmo, Zelle, Cash App, Credit Card, Cash). You arrange payment directly with the driver.',
    },
    {
      question: 'What if a driver charges me more than the quoted price?',
      answer:
        'The Don Reservations system shows the agreed price upfront. If a driver tries to overcharge without cause (like a route change), report them. Drivers rely on reputation and overcharging would destroy their rating.',
    },
  ],
  safetyTrust: [
    {
      question: 'How do I know RSG drivers are safe and legitimate?',
      answer:
        'Multiple verification layers: Verified commercial insurance, Personal Driver ID #, background checks, vehicle registration checks, and real reviews from verified trips.',
    },
    {
      question: 'What if I have a problem during a ride?',
      answer:
        'During the ride, you have the driver\'s direct number and an emergency button in the app. After the ride, you can report issues to RSG support. Drivers are verified professionals with a reputation to protect.',
    },
    {
      question: 'Can I book female drivers only or drivers who speak my language?',
      answer:
        'Yes! The RSG Directory lets you filter by driver gender, languages spoken, accessibility features, and more.',
    },
    {
      question: 'What if the driver doesn\'t show up?',
      answer:
        'No-shows severely hurt a driver\'s rating. You can immediately book another driver from the directory. You have the driver\'s contact info and accountability, unlike anonymous platform matching.',
    },
  ],
  usingPlatform: [
    {
      question: 'Do I need to download an app or can I use a website?',
      answer:
        'Both! You can use RideShareGuides.com or "The Don Reservations" mobile app. Many riders just save their favorite driver\'s Digital Business Card link to their phone for one-tap booking.',
    },
    {
      question: 'How do I find drivers in my city?',
      answer:
        'Go to RideShareGuides.com, click "Find a Driver", and search by city/zip. Browse profiles, read reviews, and save your favorites.',
    },
    {
      question: 'Can I book a driver for next week or does it have to be immediate?',
      answer:
        'You can book immediately, later today, or weeks in advance. You can also set up recurring rides (e.g., every Monday morning).',
    },
    {
      question: 'What if my flight is delayed?',
      answer:
        'The system includes flight tracking to automatically adjust pickup times. You can also easily reschedule or text your driver directly.',
    },
    {
      question: 'Can I book multiple drivers for a large group?',
      answer:
        'Yes! You can book multiple drivers through their individual profiles for weddings, corporate events, or parties.',
    },
  ],
  benefits: [
    {
      question: 'Why should I use RSG instead of just opening Uber?',
      answer:
        'Use RSG when you want the SAME reliable driver, need to book in advance, want better pricing (no surge), or want to support independent business owners. Use Uber for random, immediate trips where the driver doesn\'t matter.',
    },
    {
      question: 'Do RSG drivers provide better service?',
      answer:
        'Generally yes. They are building a business and rely on repeat clients, so reputation matters. They also keep 100% of earnings, allowing them to invest in better vehicles and service.',
    },
    {
      question: 'Can I tip RSG drivers?',
      answer:
        'Yes! Cash, Venmo/Zelle add-on, or via credit card if accepted. Drivers appreciate tips for great service.',
    },
    {
      question: 'What if I want to become a regular client with one driver?',
      answer:
        'This is the goal! Save their card, ask about weekly rates, and enjoy consistent, reliable service from a driver who knows your preferences.',
    },
  ],
}

export const faqsGeneral: FAQ[] = [
  {
    question: 'Is RSG membership really free forever?',
    answer:
      'Yes, core membership (Digital Business Card, Directory listing, Booking system) is always free. We are supported by optional premium features launching later, not by charging for basic tools.',
  },
  {
    question: 'Who runs RSG? Is this backed by Uber or Lyft?',
    answer:
      'RSG is independently owned by rideshare drivers—not funded by big tech or VC. We built the platform we needed to help drivers build their own businesses.',
  },
  {
    question: 'What happens to my data?',
    answer:
      'You own your data. We never sell driver or rider data to marketers. Your client list and booking history are yours.',
  },
  {
    question: 'What cities is RSG available in?',
    answer:
      'RSG is available globally. We have high density in major US cities (NY, LA, Chicago, Miami, etc.) and are growing rapidly in mid-size and international markets.',
  },
  {
    question: 'I\'m a driver in a small town with only Uber. Would RSG work for me?',
    answer:
      'Yes! Small markets are perfect because there is less competition. A few professional RSG drivers can dominate a small city by building personal relationships and word-of-mouth.',
  },
  {
    question: 'How do I report problems or get help?',
    answer:
      'Drivers: In-platform ticket, email support@rideshareguides.com, or community forums. Riders: Support ticket, email riders@rideshareguides.com, or report button on driver profiles.',
  },
  {
    question: 'Can I give feedback or suggest new features?',
    answer:
      'Please do! We have a feature requests forum and monthly surveys. Many features (like flight tracking) came directly from driver suggestions.',
  },
  {
    question: 'What are the first steps to join?',
    answer:
      'Drivers: Sign up at RideShareGuides.com, upload insurance, get ID #, create card, share it. Riders: Search your city, find a driver, book your first direct ride.',
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
        'Find and book your favorite professional drivers directly. Browse the RSG Drivers Directory to discover vetted, commercially-insured drivers in your area, view their professional profiles, and save their contact information for future bookings. Book your ride instantly at BookTheDon.com.',
      bookingCTA: {
        text: 'Book Your Ride at BookTheDon.com',
        href: 'https://BookTheDon.com',
      },
    },
  },
  communityInfluencers: {
    title: 'RSG Community of Influencers',
    subtitle: 'You\'re not just joining a platform—you\'re joining a community of successful drivers who share real strategies that work.',
    description: 'Learn from the Best in the Business',
    leaders: [
      {
        title: 'YouTube Creators',
        description: 'Sharing weekly income strategies, tax tips, and market insights',
      },
      {
        title: 'Facebook Group Moderators',
        description: 'Hosting live Q&As and success story features',
      },
      {
        title: 'Top Earners',
        description: 'Revealing the exact methods they use to maximize income',
      },
      {
        title: 'Market Specialists',
        description: 'Breaking down airport strategies, surge tactics, and premium service techniques',
      },
    ],
    benefits: [
      'Exclusive content from proven earners',
      'Weekly strategy sessions and AMAs',
      'Behind-the-scenes looks at six-figure driver businesses',
      'Direct access to mentors who\'ve built what you\'re building',
    ],
    forRiders: 'Follow your favorite drivers, see their tips and insights, and stay connected with the professionals who get you where you need to go. Book your ride today at BookTheDon.com.',
  },
  donReservations: {
    title: 'The Don Reservations App',
    subtitle: 'Built by Drivers, For Drivers—Technology That Puts YOU First',
    description:
      'The Don Reservations app (available on Google and Apple stores) is the industry\'s first app that connects drivers to riders directly while using today\'s familiar rideshare technology. Get your exclusive Personal Driver ID # that connects your riders directly to your Driver ID #, and build your clientele today.',
    whyYouNeedIt: [
      {
        title: 'Build Your Own Business',
        description:
          'Stop building wealth for platforms. Every client you convert becomes YOUR customer, not Uber\'s or Lyft\'s.',
      },
      {
        title: 'Secure Your Personal Driver ID #',
        description:
          'Your unique identifier in the RSG ecosystem—your professional credential that proves you\'re verified, commercially insured, and cannot be replicated.',
      },
      {
        title: 'Familiar Technology, Better Economics',
        description:
          'Riders use the same simple booking process they know. You use professional-grade dispatch tools. The difference? You are the business owner.',
      },
    ],
    steps: [
      'Join RideShareGuides.com ( Free Membership)',
      'Must have a Commercial Insurance for your Riders, to use platform.',
      'Receive your exclusive Personal Driver ID #',
      'Activate your RSG Digital Business Card',
      'Start accepting direct bookings',
    ],
  },
  driversDirectory: {
    forDrivers: {
      title: 'For Drivers: Get Discovered',
      benefits: [
        'Free professional profile in searchable directory',
        'Showcase your services, vehicles, and specialties',
        'Display verified ratings and customer reviews',
        'Include your Personal Driver ID # for direct bookings',
        'Update your availability and coverage areas in real-time',
        'Connect with riders actively seeking professional drivers',
      ],
    },
    forRiders: {
      title: 'For Riders: Find Your Perfect Driver',
      description:
        'Search our directory of verified, commercially-insured professional drivers. Filter by location, services, vehicle type, and ratings to find the perfect match for your transportation needs.',
    },
  },
  comingSoon: [
    {
      icon: 'MessageSquare',
      title: 'Forums',
      features: [
        'Market-specific forums (ex. NYC, Miami…)',
        'Vehicle advice and maintenance',
        'Tax and business strategy',
        'Customer service excellence',
      ],
    },
    {
      icon: 'ShoppingBag',
      title: 'Classifieds',
      features: [
        'Vehicles for sale & Rentals listed',
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
