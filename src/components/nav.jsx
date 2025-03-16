import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyles = {
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    top: 0,
    padding: '0 16px',
  };

  const containerStyles = {
    maxWidth: '1280px', // Adjust max width for better container size
    margin: '0 auto',
    padding: '0 16px',
  };

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    padding: '0 16px',
  };

  const logoStyles = {
    flexShrink: 0,
  };

  const logoLinkStyles = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#3182ce',
  };

  const linkStyles = {
    color: '#2d3748', // Gray-800
    textDecoration: 'none',
    padding: '8px 12px',
    fontSize: '0.875rem', // text-sm
    fontWeight: '500', // font-medium
  };

  const hoverStyles = {
    color: '#3182ce', // Blue-500
  };

  const mobileMenuButtonStyles = {
    background: 'transparent',
    border: 'none',
    color: '#4a5568', // Gray-600
    fontSize: '24px',
    cursor: 'pointer',
  };

  const mobileMenuButtonHoverStyles = {
    color: '#3182ce', // Blue-500
  };

  const menuDropdownStyles = {
    paddingTop: '8px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    display: isOpen ? 'block' : 'none',
  };

  const menuItemStyles = {
    display: 'block',
    color: '#2d3748', // Gray-800
    textDecoration: 'none',
    padding: '8px 12px',
    fontSize: '0.875rem', // text-sm
    fontWeight: '500', // font-medium
  };

  const buttonStyles = {
    backgroundColor: '#3182ce', // Blue-500
    color: 'white',
    padding: '8px 12px',
    borderRadius: '8px', // rounded-md
    fontSize: '0.875rem', // text-sm
    fontWeight: '500', // font-medium
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  const buttonHoverStyles = {
    backgroundColor: '#2b6cb0', // Blue-600
  };

  const whatsappStyles = {
    color: '#38a169', // Green-500
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  const whatsappHoverStyles = {
    color: '#2f855a', // Green-700
  };

  const loginHoverStyles = {
    backgroundColor: '#2b6cb0', // Blue-600
  };

  return (
    <nav style={navbarStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          {/* Logo */}
          <div style={logoStyles}>
            <a href="/" style={logoLinkStyles}>
              <img src={require("../assets/Logo.png")} width="108" height="48" alt="logo" />
            </a>
          </div>

          {/* Menu Button and WhatsApp icon on mobile */}
          {/* <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="https://wa.me/your-number"
              style={whatsappStyles}
              onMouseOver={(e) => e.target.style.color = whatsappHoverStyles.color}
              onMouseOut={(e) => e.target.style.color = whatsappStyles.color}
            >
              <FaWhatsapp />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              style={mobileMenuButtonStyles}
              onMouseOver={(e) => e.target.style.color = mobileMenuButtonHoverStyles.color}
              onMouseOut={(e) => e.target.style.color = mobileMenuButtonStyles.color}
            >
              <HiMenuAlt3 style={{ height: '24px', width: '24px' }} />
            </button>
          </div> */}

          {/* Menu links for larger screens */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="/" style={{ ...linkStyles, ...hoverStyles }}>Home</a>
            <a href="/flight" style={{ ...linkStyles, ...hoverStyles }}>Flight</a>
            <a href="/tour" style={{ ...linkStyles, ...hoverStyles }}>Tour</a>
            <a href="/about" style={{ ...linkStyles, ...hoverStyles }}>About</a>
            <a href="/support" style={{ ...linkStyles, ...hoverStyles }}>Support</a>
          </div>

          {/* WhatsApp and Login buttons on larger screens */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="https://wa.me/your-number"
              style={whatsappStyles}
              onMouseOver={(e) => e.target.style.color = whatsappHoverStyles.color}
              onMouseOut={(e) => e.target.style.color = whatsappStyles.color}
            >
              <FaWhatsapp style={{ marginRight: '4px' }} /> WhatsApp
            </a>
            <a
              href="/login"
              style={buttonStyles}
              onMouseOver={(e) => e.target.style.backgroundColor = loginHoverStyles.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* <div style={menuDropdownStyles}>
        <a href="/" style={menuItemStyles}>Home</a>
        <a href="/flight" style={menuItemStyles}>Flight</a>
        <a href="/tour" style={menuItemStyles}>Tour</a>
        <a href="/about" style={menuItemStyles}>About</a>
        <a href="/support" style={menuItemStyles}>Support</a>
      </div> */}
    </nav>
  );
};

export default Nav;
