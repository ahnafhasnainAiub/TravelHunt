const sampleListings = [
 { 
    title : "New Hotel-Luxury",
    description: "By the beach",
   
    image:{ 
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1327080125/photo/triangular-modern-lake-house-at-fall.jpg?s=2048x2048&w=is&k=20&c=C0L7fC2UeHbZakWBZNg7LC-MdKFYHISn26LVBZK5UL8=",
    },

    price : 3000,
    location : "Sugondha-beach, Cox's Bazar",
    country : "Bangladesh",
  },

  { 

    title: "Mountain Retreat",
    description: "Cozy cabin with stunning views",  
    image:{ 
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },

    price: 2500,
    location: "Banff National Park",
    country: "Canada"
  },
  {
    title: "Seaside Villa",
    description: "Relaxing getaway by the ocean",
    image:{ 
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/174993626/photo/seaside-house.webp?b=1&s=170667a&w=0&k=20&c=ogFuY57ErG6sRtWh5uUP5p-35vefoRQsN4inr70bVrI=",
    },
      price: 4000,
    location: "Maui, Hawaii",
    country: "USA"
  },
  {
    title: "Historic Loft",
    description: "Charming apartment in the heart of the city",
    image:{ 
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGlzdG9yaWMlMjBMb2Z0JTIwaW1hZ2UlMkMlMjBmcmFuY2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 1500,
    location: "Paris",
    country: "France"
  },
  {
    title: "Desert Oasis",
    description: "Luxurious tent under the stars",
    image:{ 
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1473870803/photo/the-air-was-alive-with-the-sight-of-the-balloons-hovering-in-the-sky-above-and-the-girl-below.webp?b=1&s=170667a&w=0&k=20&c=EDM1gCOArdN6is1OeivR0Ehi2BCgNG5V4Ocq26TVlQM=",
    },
    price: 3500,
    location: "Sahara Desert",
    country: "Morocco"
  },
  {
    title: "Rustic Cottage",
    description: "Tranquil retreat surrounded by nature",
    image:{ 
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/639451404/photo/lake-house.jpg?s=2048x2048&w=is&k=20&c=AtnoIrXIcTo-Ob3zHl3WHw0HLg2j1Gcldt4793bahHY=",
    },
    price: 1800,
    location: "County Kerry",
    country: "Ireland"
},
{
    title: "Cosy Cottage Retreat",
    description: "Surrounded by lush greenery",
    
    image:{ 
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1221865611/photo/modern-house-design-with-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=LDmUbEcKt4o70oJvy83Hiad6cnl3INo3kWnuFwbsMyo=",
    },
    price: 1500,
    location: "Lake District",
    country: "United Kingdom"
},
{
    title: "Mountain Chalet Getaway",
    description: "Close to ski slopes",
    image:{ 
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1414989849/photo/zermatt-city-with-matterhorn-peak-view-and-swiss-flag.webp?b=1&s=170667a&w=0&k=20&c=tvYAk9lL0ITuABNkyoNP-cMJHLpWblQPF0RReMaMe_s=",
    },
    price: 2000,
    location: "Alps",
    country: "Switzerland"
},
{
    title: "Seaside Villa Oasis",
    description: "Private beach access",
    image:{ 
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/543834642/photo/deckchairs-on-jetty.webp?b=1&s=170667a&w=0&k=20&c=sFk7nScPfzwmFEhFg2EM5jxHRGaSldAkzHjU0LiA4KI=",
    },
    price: 3500,
    location: "Amalfi Coast",
    country: "Italy"
},
{
    title: "Luxury Penthouse Haven",
    description: "Panoramic city vistas",
    image:{ 
      filename: "listingimage",
      url:  "https://images.unsplash.com/photo-1543579596-2c11997c7706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1YmFpJTIwbWFyaW5lJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    price: 4000,
    location: "Dubai Marina",
    country: "United Arab Emirates"
},

];

module.exports = { data: sampleListings };