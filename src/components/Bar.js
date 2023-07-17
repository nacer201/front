import React, { useState } from 'react';
import './Bar.css';
import Drive from './drive'
import BarSide from './BarSide';

function CustomBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('My Drive');

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  const sidebarItems = [
    { label: 'Page1', icon: 'grid_on', path: '/#Page1' },
    { label: 'Page2', icon: 'menu', path: '/#Page2' },
  
  ];

  return (
    <div className="custom-bar">
      <div className="left-content">
       {sidebarItems.map((item, index) => (
        <a
          href={item.path}
          key={index}
          className={`sidebar-item ${activeItem === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <i
            className={`material-icons ${activeItem === index ? 'active' : ''}`}
          >
            {item.icon}
          </i>
          
        </a>
      ))}
      </div>
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="dropdown-toggle" onClick={handleDropdownToggle}>
          <span>{selectedOption}</span>
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => handleOptionSelect('My Drive')}>My Drive</li>
            <li onClick={() => handleOptionSelect('Option 1')}>Option 1</li>
            <li onClick={() => handleOptionSelect('Option 2')}>Option 2</li>
            <li onClick={() => handleOptionSelect('Option 3')}>Option 3</li>
          </ul>
        </div>
      </div>
      <Drive/>
      
    </div>
  );
}

export default CustomBar;
