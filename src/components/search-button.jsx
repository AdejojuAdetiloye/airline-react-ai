import React from 'react';

const SearchButton = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2.5rem', // equivalent to mb-10
    marginTop: '1rem', // equivalent to mt-4
  };

  const buttonStyles = {
    backgroundColor: '#065279', // equivalent to bg-[#065279]
    color: 'white',
    fontWeight: 'bold', // equivalent to font-bold
    paddingTop: '0.5rem', // equivalent to py-2
    paddingBottom: '0.5rem', // equivalent to py-2
    paddingLeft: '1rem', // equivalent to px-4
    paddingRight: '1rem', // equivalent to px-4
    borderRadius: '0.5rem', // equivalent to rounded-lg
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // equivalent to shadow-lg
    transition: 'background-color 0.3s', // equivalent to transition duration-300
  };

  const buttonHoverStyles = {
    backgroundColor: '#2b6cb0', // equivalent to hover:bg-blue-700
  };

  return (
    <div style={containerStyles}>
      <button
        style={buttonStyles}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
      >
        Search Flight
      </button>
    </div>
  );
};

export default SearchButton;
