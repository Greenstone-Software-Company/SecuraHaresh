import React from 'react';
import Link from 'next/link';

const styles = {
  Header: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '70px',
    backgroundColor: '#0d111a',
    borderBottom: '1px solid #ffffff',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
    display: 'flex',
    justifyContent: 'flex-start', // Aligns the logo to the left
    alignItems: 'center',
    padding: '0 20px',
    zIndex: 1000, /* Ensure the Navbar stays on top */
  },
  Logo: {
    display: 'flex',
    alignItems: 'center',
  },
  LogoImage: {
    width: '50px',
    height: '50px',
  },
};

const Navbar = () => {
  return (
    <div style={styles.Header}>
      <div style={styles.Logo}>
        <Link href="/">
          <img style={styles.LogoImage} src="/icons/secura.png" alt="Secura Logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
