/** @type {import('next').NextConfig} */



module.exports = () => { 
  const rewrites = () => {
    return [
      {
        source: '/hotel-api/1.0/hotels',
        destination: 'https://api.test.hotelbeds.com/hotel-api/1.0/hotels'
      },
    ];
  };

  return {
    rewrites,
  }
}
module.exports ={
  images: {
    domains: ['photos.hotelbeds.com'],
  }
}