import React from 'react';

const OptionsSelection = () => {
  const containerStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-5.25rem', // equivalent to -mt-5
    marginBottom: '1rem', // equivalent to mb-4
    backgroundColor: 'white',
    padding: '1.75rem', // equivalent to p-7
    borderRadius:15,
    width:"70%",
    height:150,
    margin:"auto",
  };

  const boxStyles = {
    maxWidth: '220px',
    padding: '0.5rem', // equivalent to p-2
    border: '1px solid #e0f7fa', // border-t-white and border-cyan-100
    boxSizing: 'border-box',
    margin: '0.5rem', // equivalent to mx-2
  };

  const titleStyles = {
    fontWeight: '600', // equivalent to font-semibold
  };

  const selectWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0.5rem', // equivalent to ml-2
  };

  const selectStyles = {
    width: '100%',
    padding: '0.25rem', // equivalent to p-1
    border: '1px solid #b2ebf2', // border-cyan-200
    borderRadius: '0.375rem', // equivalent to rounded
  };

  return (
    <div style={containerStyles}>
      {/* From */}
      <div style={boxStyles}>
        <div style={titleStyles}>From</div>
        <div style={selectWrapperStyles}>
          <img src={require("../assets/logo/flight-logo.png")} width={30} height={30} alt="icon" />
          <div style={iconWrapperStyles}>
            <select style={selectStyles}>
              <option value="option1">Bangladesh Airport International</option>
              <option value="option2">WestHam Airport, Germany</option>
              <option value="option3">International Airport, USA</option>
            </select>
          </div>
        </div>
      </div>

      {/* To */}
      <div style={boxStyles}>
        <div style={titleStyles}>To</div>
        <div style={selectWrapperStyles}>
          <img src={require("../assets/logo/flight-down.png")} width={30} height={30} alt="icon" />
          <div style={iconWrapperStyles}>
            <select style={selectStyles}>
              <option value="option1">Bangladesh Airport International</option>
              <option value="option2">WestHam Airport, Germany</option>
              <option value="option3">International Airport, USA</option>
            </select>
          </div>
        </div>
      </div>

      {/* Date */}
      <div style={boxStyles}>
        <div style={titleStyles}>Date</div>
        <div style={selectWrapperStyles}>
          <img src={require("../assets/logo/calender.png")} width={30} height={30} alt="icon" />
          <div style={iconWrapperStyles}>
            <select style={selectStyles}>
              <option value="option1">22-4-2024</option>
              <option value="option2">12-5-2024</option>
              <option value="option3">4-7-2024</option>
            </select>
          </div>
        </div>
      </div>

      {/* Person */}
      <div style={boxStyles}>
        <div style={titleStyles}>Person</div>
        <div style={selectWrapperStyles}>
          <img src={require("../assets/logo/person.png")} width={30} height={30} alt="icon" />
          <div style={iconWrapperStyles}>
            <select style={selectStyles}>
              <option value="option1">1 person</option>
              <option value="option2">5 persons</option>
              <option value="option3">10 persons</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsSelection;
