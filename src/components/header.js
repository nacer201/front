import React, { useState } from 'react';
import './AppBar.css';

function AppBar() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleProfileMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { icon: 'help' },
    { icon: 'settings' },
    { icon: 'account_circle' }
  ];

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="app-bar">
      <div className="toolbar">
        <div className="title">Meryem</div>
        <div className="search">
          <div className="search-wrapper">
            <input type="text" placeholder="Search..." />
            <i className="material-icons">search</i>
          </div>
          <div className="dropdown" onClick={handleProfileMenuToggle}>
            <i className="material-icons">keyboard_arrow_down</i>
            {isMenuOpen && (
              <div className="dropdown-content">
                <div className="dropdown-item">Item 1</div>
                <div className="dropdown-item">Item 2</div>
                <div className="dropdown-item">Item 3</div>
              </div>
            )}
          </div>
        </div>
        <div className="spacer"></div>
        <div className="desktop-menu">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index} onClick={() => handleIconClick(item.icon)}>
              <a href={`#${item.icon}`}>
                <i className={`material-icons ${selectedIcon === item.icon ? 'selected' : ''}`}>
                  {item.icon}
                </i>
              </a>
            </div>
          ))}
        </div>
        <div className="menu-button" onClick={handleMenuClose}>
          <i className="material-icons">menu</i>
        </div>
      </div>
    </div>
  );
}

export default AppBar;