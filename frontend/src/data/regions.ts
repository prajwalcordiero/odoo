export const REGION_DATA = [
  {
    id: 'europe',
    name: 'Europe',
    img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Experience history, art, and diverse cultures across the continent.',
    cities: [
      { name: 'Paris, France', img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rome, Italy', img: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Santorini, Greece', img: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ],
    attractions: [
      { name: 'Eiffel Tower', desc: 'The iconic iron lattice tower on the Champ de Mars.' },
      { name: 'The Colosseum', desc: 'An oval amphitheatre in the centre of the city of Rome.' }
    ]
  },
  {
    id: 'asia',
    name: 'Asia',
    // FIXED: Using stable Pexels link for Asia Main
    img: 'https://images.pexels.com/photos/1612461/pexels-photo-1612461.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Explore ancient temples, bustling megacities, and tropical islands.',
    cities: [
      { name: 'Tokyo, Japan', img: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Bali, Indonesia', img: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600' },
      // FIXED: Using stable link for Bangkok
      { name: 'Bangkok, Thailand', img: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ],
    attractions: [
      { name: 'Great Wall of China', desc: 'A world-renowned ancient fortification.' },
      { name: 'Mount Fuji', desc: 'Japan’s highest peak and iconic active volcano.' }
    ]
  },
  {
    id: 'americas',
    name: 'Americas',
    img: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'From the skyscrapers of NYC to the Amazon rainforest.',
    cities: [
      { name: 'New York, USA', img: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rio de Janeiro, Brazil', img: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Vancouver, Canada', img: 'https://images.pexels.com/photos/2382833/pexels-photo-2382833.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ],
    attractions: [
      { name: 'Statue of Liberty', desc: 'A colossal neoclassical sculpture on Liberty Island.' },
      { name: 'Machu Picchu', desc: 'An Incan citadel set high in the Andes Mountains.' }
    ]
  },
  {
    id: 'oceania',
    name: 'Oceania',
    img: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Stunning coastlines, the Outback, and unique island adventures.',
    cities: [
      { name: 'Sydney, Australia', img: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Auckland, NZ', img: 'https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=600' },
      // FIXED: Using stable link for Bora Bora
      { name: 'Bora Bora', img: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ],
    attractions: [
      { name: 'Sydney Opera House', desc: 'A multi-venue performing arts centre in Sydney.' },
      { name: 'Great Barrier Reef', desc: 'The world\'s largest coral reef system.' }
    ]
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    img: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A blend of ultra-modern architecture and ancient traditions.',
    cities: [
      { name: 'Dubai, UAE', img: 'https://images.pexels.com/photos/325191/pexels-photo-325191.jpeg?auto=compress&cs=tinysrgb&w=600' },
      // FIXED: Using stable link for Petra
      { name: 'Petra, Jordan', img: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Istanbul, Turkey', img: 'https://images.pexels.com/photos/1549324/pexels-photo-1549324.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ],
    attractions: [
      { name: 'Burj Khalifa', desc: 'The world\'s tallest building located in Dubai.' },
      { name: 'The Dead Sea', desc: 'A salt lake bordered by Jordan and Israel.' }
    ]
  },
  {
    id: 'africa',
    name: 'Africa',
    // FIXED: Using stable link for Africa Main
    img: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Untamed wildlife, majestic mountains, and golden deserts.',
    cities: [
      { name: 'Cape Town, SA', img: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Cairo, Egypt', img: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=600' },
      // FIXED: Using stable link for Marrakech
      { name: 'Marrakech, Morocco', img: 'https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ],
    attractions: [
      { name: 'Serengeti Safari', desc: 'Massive park home to the annual great migration.' },
      { name: 'Pyramids of Giza', desc: 'Ancient stone structures built for Egyptian kings.' }
    ]
  }
];