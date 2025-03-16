import React from 'react';
import { airlines } from '../utils/airlines';

const TopAirlines = () => {
  const containerStyles = {
    backgroundColor: 'white', // Equivalent to bg-gray-100
    width: '100%',
    position:"relative",
    marginTop:50,
    margin: 'auto',
    paddingTop: '5rem', // py-20
    paddingBottom: '3rem', // mb-12
    paddingLeft: '1.25rem', // px-5
    paddingRight: '1.25rem', // px-5
  };

  const headerStyles = {
    textAlign: 'center',
    width: '100%',
    fontSize: '2.5rem', // text-2xl
    fontWeight: 'bold', // font-bold
    marginBottom: '1.25rem', // mb-5
    marginTop: '2.5rem', // mt-10
  };

  const descriptionStyles = {
    textAlign: 'center',
    margin: 'auto',
    fontSize: '1.550rem', // sm:text-lg
    marginBottom: '5rem', // mb-20
    padding: '0.3rem', // p-2
    wordWrap: 'break-word', // text-wrap
  };

  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Display 3 items per row
    gap: '1.4rem', // gap-6
    maxWidth: '90%', // Set to 100% or a value that fits the container
    margin: 'auto',
  };

  const airlineCardStyles = {
    backgroundColor: 'white',
    padding: '1.25rem', // p-5
    borderRadius: '0.75rem', // rounded-lg
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-lg
    textAlign: 'left',
  };

  const airlineLogoStyles = {
    marginBottom: '1rem', // mb-4
    width: '6rem', // w-24
  };

  const airlineNameStyles = {
    fontSize: '1.25rem', // text-xl
    fontWeight: 'bold', // font-bold
    marginBottom: '0.5rem', // mb-2
  };

  const airlineDescriptionStyles = {
    color: '#718096', // text-gray-600
    marginBottom: '1rem', // mb-4
  };

  const buttonStyles = {
    padding: '0.5rem 1rem', // px-4 py-2
    border: '2px solid #3182ce', // border-blue-600
    color: '#3182ce', // text-blue-600
    backgroundColor: 'white',
    borderRadius: '0.75rem', // rounded-lg
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s', // transition-colors duration-300
  };

  const buttonHoverStyles = {
    backgroundColor: '#3182ce', // hover:bg-blue-600
    color: 'white', // hover:text-white
  };

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <h1 style={headerStyles}>Search Top Airlines</h1>
      <p style={descriptionStyles}>
        Experience the grandeur of air travel with AirlineSearch, catering to your needs on a grand scale.
      </p>

      {/* Airlines Grid */}
      <div style={gridContainerStyles}>
        {airlines.map((airline, index) => (
          <div key={index} style={airlineCardStyles}>
            {/* Airline Logo */}
            <div style={airlineLogoStyles}>
              <img
                src={airline.logo}
                alt={airline.name}
                style={{ width: '6rem', height: 'auto' }} // w-24
              />
            </div>

            {/* Airline Name */}
            <h3 style={airlineNameStyles}>{airline.name}</h3>

            {/* Airline Description */}
            <p style={airlineDescriptionStyles}>{airline.description}</p>

            {/* Book Now Button */}
            <button
              style={buttonStyles}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAirlines;
