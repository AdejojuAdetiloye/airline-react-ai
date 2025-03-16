
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaRegClock } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: '#177CB0', // Bluish background
                padding: '40px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap', // Allow items to wrap on smaller screens
                maxWidth: '100%',
                margin: '50px auto 0', // Centering with margin
                fontFamily: '"Arial", sans-serif', // Suitable font for readability
                color: '#fff', // Default text color
            }}
        >
            {/* First Div: Logo and Description */}
            <div style={{ flex: '2', paddingRight: '20px' }}>
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    color: 'white',
                }}>
                    <img src={require("../assets/logo/Logo.png")} width="100" height="60" alt="logo" />
                </h2>
                <p style={{
                    marginBottom: '50px',
                    color: '#f0f0f0',
                    fontSize: '16px',
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu vel dui volutpat fermentum.
                </p>
                <button
                    style={{
                        backgroundColor: '#FFB61E',
                        border: 'none',
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginBottom: '20px',
                        borderRadius: '5px', // Rounded button edges
                        fontSize: '16px', // Button font size
                    }}
                >
                    Read More
                </button>
                <hr style={{ margin: '20px 0', border: '1px solid #ccc' }} />
                <div style={{ display: 'flex', gap: '15px' }}>
                    <a href="#" aria-label="Facebook">
                        <FaFacebook style={{ color: '#fff', fontSize: '20px' }} />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <FaTwitter style={{ color: '#fff', fontSize: '20px' }} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedin style={{ color: '#fff', fontSize: '20px' }} />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FaInstagram style={{ color: '#fff', fontSize: '20px' }} />
                    </a>
                </div>
            </div>

            {/* Second Div: Quick Links */}
            <div style={{ flex: '1', paddingRight: '20px' }}>
                <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'yellow',
                    marginBottom: '20px',
                }}>
                    Quick Links
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {['Flight', 'Tour', 'About', 'Terms of Service', 'Privacy Policy', 'Report an Issue'].map((link, index) => (
                        <li key={index} style={{ marginBottom: '10px', fontSize: '16px' }}>
                            <span>&#x2794; {link}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Third Div: Contact */}
            <div style={{ flex: '1' }}>
                <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'yellow',
                    marginBottom: '20px',
                }}>
                    Contact
                </h3>
                <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                    Phone: 897 3452 8393
                </p>
                <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                    Email: suhabubali@gmail.com
                </p>
                <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                    Address: Wall Street, Washington DC, USA
                </p>
                <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                    <FaRegClock style={{ marginRight: '5px' }} />
                    <span>Sat - Fri ( 9.00am - 9.00pm)</span>
                </p>
            </div>

            {/* Additional Div: Copyright and Links */}
            <div style={{ width: '100%', marginTop: '40px' }}>
                <hr style={{ border: '1px solid white' }} />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    color: '#fff',
                }}>
                    <span>&copy; {new Date().getFullYear()} Your Company Name</span>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ color: '#fff', fontSize: '16px' }}>Privacy Policy</a>
                        <a href="#" style={{ color: '#fff', fontSize: '16px' }}>Customer Support</a>
                        <a href="#" aria-label="Facebook">
                            <FaFacebook style={{ color: '#fff', fontSize: '20px' }} />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter style={{ color: '#fff', fontSize: '20px' }} />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedin style={{ color: '#fff', fontSize: '20px' }} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram style={{ color: '#fff', fontSize: '20px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
