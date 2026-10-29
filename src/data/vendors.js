const vendors = [
  {
    id: '2411067-yemeni',
    name: 'Bab Al-Yaman',
    location: 'Mahallah Faruq, Center',
    openHours: '10:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: '2411067-m1', name: 'Nasi Mandi Ayam', description: 'Smoky roasted chicken on spiced mandi rice', price: 11.0, category: 'Rice', available: true },
      { id: '2411067-m2', name: 'Nasi Mandi Kambing', description: 'Tender lamb on fragrant mandi rice', price: 12.0, category: 'Rice', available: true },
      { id: '2411067-m3', name: 'Nasi Kabsa Ayam', description: 'Spiced chicken rice with tomato sauce', price: 10.5, category: 'Rice', available: true },
      { id: '2411067-m4', name: 'Chicken Shawarma', description: 'Grilled chicken, garlic sauce and pickles in a wrap', price: 7.0, category: 'Wraps', available: true },
      { id: '2411067-m5', name: 'Beef Shawarma', description: 'Sliced beef, tahini sauce and salad in a wrap', price: 8.0, category: 'Wraps', available: true },
      { id: '2411067-m6', name: 'Mutabbaq Daging', description: 'Crispy folded pancake stuffed with minced beef', price: 8.5, category: 'Snacks', available: true },
      { id: '2411067-m7', name: 'Hummus with Roti', description: 'Creamy chickpea dip with warm bread', price: 6.5, category: 'Snacks', available: true },
      { id: '2411067-m8', name: 'Shai Adeni', description: 'Yemeni milk tea with cardamom', price: 3.0, category: 'Drinks', available: true },
      { id: '2411067-m9', name: 'Lemon Mint', description: 'Fresh lemon juice blended with mint', price: 4.0, category: 'Drinks', available: true },
    ],
  },
  {
    id: '2411067-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: '2411067-a1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9.0, category: 'Rice', available: true },
      { id: '2411067-a2', name: 'Laksa Johor', description: 'Spaghetti in spicy fish gravy with herbs', price: 8.0, category: 'Noodles', available: true },
    ],
  },
  {
    id: '2411067-ali',
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: false,
    menu: [
      { id: '2411067-l1', name: 'Nasi Lemak Ayam', description: 'Coconut rice, fried chicken, sambal and egg', price: 7.5, category: 'Rice', available: true },
      { id: '2411067-l2', name: 'Teh Tarik', description: 'Pulled milk tea', price: 2.5, category: 'Drinks', available: true },
    ],
  },
]

export default vendors