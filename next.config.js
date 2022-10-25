/** @type {import('next').NextConfig} */



module.exports = () => { 

  const images =  {
    domains: ['photos.hotelbeds.com'],
  }

  const rewrites = () => {
    return [
      {
        source: '/hotel-api/1.0/hotels',
        destination: 'https://api.test.hotelbeds.com/hotel-api/1.0/hotels'
      },

      {
        source: '/hotel-api/1.0/bookings',
        destination: 'https://api.test.hotelbeds.com/hotel-api/1.0/bookings'
      },
      
    ];
  };

  

  return {
    rewrites,
    images
  }
}


