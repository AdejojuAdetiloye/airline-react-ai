import React from 'react';
import { destinations } from '../utils/destinations';

const PopularDestinations = () => {
  // Styles for the container and header
  const containerStyles = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2.5rem', // Text size 2xl
    marginBottom: '2.5rem', // margin-bottom: 10
    marginTop:"2.5rem"
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // grid-cols-2
    gap: 30,
 // gap-5
    width: '60%',
    margin: 'auto',
    alignItems:"center",
    justifyContent:"center"
  };

  const smGridStyles = {
    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(3, 1fr)', // sm:grid-cols-3
      width: '1220px', // sm:w-[1220px]
    },
  };

  const imageContainerStyles = {
    borderRadius: '20px', // rounded-20
    cursor: 'pointer',
  };

  const imgStyles = {
    width: '300px', // w-[250px]
    height: '300px', // h-[200px]
    objectFit: 'cover', // object-cover
  };

  const smImgStyles = {
    '@media (min-width: 640px)': {
      width: '410px', // sm:w-[410px]
      height: '300px', // sm:h-[300px]
    },
  };

  return (
    <div>
      {/* Header Section */}
      <h1 style={containerStyles}>
        Popular Destinations
      </h1>

      {/* Destinations Grid */}
      <div style={{ ...gridStyles, ...smGridStyles }}>
        {destinations.map((destination, index) => (
          <div key={index} style={imageContainerStyles}>
            {/* Image wrapped in a clickable div */}
            <div style={{ cursor: 'pointer' }}>
              <img
                src={destination.image}
                alt={destination.name}
                style={{ ...imgStyles, ...smImgStyles }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
