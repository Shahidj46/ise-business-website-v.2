/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// export const HERO_IMAGES = [
//   "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000",
//   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
//   "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=2000"
// ];

export const HERO_IMAGES = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

export const PROJECTS = [
  {
    id: 1,
    name: "EDISON MACBETH",
    location: "Plot 20A, Afroza Begum Road, Block-G, Bashundhara R/A, Dhaka",
    image: "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=2000",
    thumbnails: [
      "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1600607687940-477a63bd50be?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1600585154542-6379b140478b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400",
    ],
    description: "A creation rising on an unbeatable neighborhood where you have it all. Where life intertwined with natural elements of the Bengal delta, the largest in the world. All awaiting at your doorstep. Make Your Mark on Edison Macbeth.",
    status: "Ongoing",
    subtitle: "Make Your Mark",
    specifications: {
      orientation: "South Facing",
      frontRoad: "40 Feet",
      landSize: "10 Katha",
      apartmentSize: "2230 - 3000 SQFT (Approx.)",
      towers: "1",
      apartments: "144",
      parking: "220",
      floors: "B2+B1+G+13"
    },
    progress: 45,
    locationCoords: { lat: 23.8242, lng: 90.4262 }
  },
  {
    id: 2,
    name: "Skyway Commercial Hub",
    location: "Banani 11, Dhaka",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    thumbnails: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400",
    ],
    description: "The most advanced commercial architectural marvel in the heart of Banani.",
    status: "Upcoming",
    subtitle: "Elevation of Business",
    specifications: {
      orientation: "North Facing",
      frontRoad: "60 Feet",
      landSize: "15 Katha",
      apartmentSize: "N/A (Commercial)",
      towers: "2",
      apartments: "120 Units",
      parking: "300",
      floors: "G+18"
    },
    progress: 10,
    locationCoords: { lat: 23.7937, lng: 90.4066 }
  },
  {
    id: 3,
    name: "The Platinum Heights",
    location: "Bashundhara R/A, Dhaka",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
    thumbnails: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400",
    ],
    description: "Premium high-rise living with a private club and world-class amenities.",
    status: "Ready",
    subtitle: "The Peak of Luxury",
    specifications: {
      orientation: "Corner Plot",
      frontRoad: "50 Feet",
      landSize: "20 Katha",
      apartmentSize: "3500 - 4500 SQFT",
      towers: "1",
      apartments: "40",
      parking: "100",
      floors: "G+20"
    },
    progress: 100,
    locationCoords: { lat: 23.8191, lng: 90.4332 }
  },
  {
    id: 4,
    name: "Urban Oasis",
    location: "Gulshan 2, Dhaka",
    image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&q=80&w=2000",
    thumbnails: [
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&q=80&w=400",
    ],
    description: "Green-certified residential complex designed for sustainable living.",
    status: "Handed Over",
    subtitle: "Nature Meets Luxury",
    specifications: {
      orientation: "East Facing",
      frontRoad: "30 Feet",
      landSize: "8 Katha",
      apartmentSize: "1800 - 2400 SQFT",
      towers: "1",
      apartments: "24",
      parking: "40",
      floors: "G+12"
    },
    progress: 100,
    locationCoords: { lat: 23.7925, lng: 90.4127 }
  },
  {
    id: 5,
    name: "Lakeview Residence",
    location: "Uttara Sector 12, Dhaka",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000",
    thumbnails: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400",
    ],
    description: "Ultra-luxury apartments with panoramic lake views.",
    status: "Ongoing",
    subtitle: "Live by the Water",
    specifications: {
      orientation: "South Facing",
      frontRoad: "40 Feet",
      landSize: "12 Katha",
      apartmentSize: "2800 SQFT",
      towers: "1",
      apartments: "36",
      parking: "72",
      floors: "G+14"
    },
    progress: 60,
    locationCoords: { lat: 23.8759, lng: 90.3795 }
  },
  {
    id: 6,
    name: "Skyline Towers",
    location: "Bashundhara, Dhaka",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    thumbnails: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    ],
    description: "Modern apartments with smart home features and sky lounge.",
    status: "Ongoing",
    subtitle: "Horizon of Comfort",
    specifications: {
      orientation: "North-West",
      frontRoad: "25 Feet",
      landSize: "10 Katha",
      apartmentSize: "2100 SQFT",
      towers: "2",
      apartments: "80",
      parking: "100",
      floors: "G+16"
    },
    progress: 30,
    locationCoords: { lat: 23.8222, lng: 90.4222 }
  },
  {
    id: 7,
    name: "Riverside Villas",
    location: "Badda, Dhaka",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000",
    description: "Exclusive waterfront villas with private decks.",
    status: "Upcoming",
    subtitle: "Private Heaven",
    specifications: {
      landSize: "50 Katha",
      towers: "12 Villas",
      parking: "24",
      floors: "G+2"
    },
    progress: 5
  },
  {
    id: 8,
    name: "Golden Gate Plaza",
    location: "Gulshan, Dhaka",
    image: "https://images.unsplash.com/photo-1449156001437-3a1621dfbe2b?auto=format&fit=crop&q=80&w=2000",
    description: "Premium commercial space for multinational offices.",
    status: "Upcoming",
    subtitle: "Legacy of Business",
    specifications: {
      floors: "G+25"
    },
    progress: 0
  },
  {
    id: 9,
    name: "Royal Heights",
    location: "Dhanmondi, Dhaka",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=2000",
    description: "Luxury living in the heart of the city.",
    status: "Ready",
    subtitle: "Royal Lifestyle",
    progress: 100
  },
  {
    id: 10,
    name: "Majestic Mews",
    location: "Nikunja, Dhaka",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000",
    description: "Spacious townhouses with modern amenities.",
    status: "Ready",
    subtitle: "Classic Haven",
    progress: 100
  },
  {
    id: 11,
    name: "Heritage Park",
    location: "Mirpur, Dhaka",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a91bd678d?auto=format&fit=crop&q=80&w=2000",
    description: "Community-focused living with extensive parks.",
    status: "Handed Over",
    subtitle: "Green Community",
    progress: 100
  },
  {
    id: 12,
    name: "Crystal Tower",
    location: "Banani, Dhaka",
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=2000",
    description: "Iconic glass tower with luxury suites.",
    status: "Handed Over",
    subtitle: "Modern Icon",
    progress: 100
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Afridi Rahman",
    role: "Apartment Owner, Lakeview",
    content: "Innovative Structural Engineering didn't just build a home; they created a sanctuary. The attention to detail is world-class."
  },
  {
    id: 2,
    name: "Farhana Karim",
    role: "CEO, GreenTech Solutions",
    content: "The engineering expertise they brought to our commercial project was unmatched. Safety and innovation at its best."
  },
  {
    id: 3,
    name: "Imtiaz Ahmed",
    role: "Investor",
    content: "Timely delivery and premium quality. They are my first choice for any structural engineering consultancy."
  }
];

export const FEATURED_STATS = [
  { label: "Years Experience", value: "15+" },
  { label: "Completed Projects", value: "250+" },
  { label: "Happy Clients", value: "1.2k" },
  { label: "Awards Won", value: "12" }
];
