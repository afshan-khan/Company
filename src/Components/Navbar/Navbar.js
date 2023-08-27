import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navbar = [
    { name: 'Home', id: '' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: '',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
  ];

  const isLinkActive = (id) => {
    return window.location.pathname.split('/')[1] === id;
  };

  return (
    <nav className='navbar-container'>
      <ul className='navbar'>
        {navbar.map((item) => (
          <li key={item.id} className='navbar-item'>
            <Link
              to={`/${item.id}`}
              className={isLinkActive(item.id) ? 'active' : ''}
            >
              {item.name}
            </Link>
            {item.child && (
              <ul className='sub-navbar'>
                {item.child.map((childItem) => (
                  <li key={childItem.id} className='sub-navbar-item'>
                    <Link to={`#${childItem.id}`}>{childItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
