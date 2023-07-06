import React, { useState } from 'react';
import './SideBar.css';

function Sidebar() {
  const sidebarItems = [
    { label: 'Priority', icon: 'priority_high', path: '/#Priority' },
    { label: 'My Drive', icon: 'folder', path: '/#MyDrive' },
    { label: 'Shared with me', icon: 'people', path: '/#Sharedwithme' },
    { label: 'Recent', icon: 'schedule', path: '/#Recent' },
    { label: 'Starred', icon: 'star', path: '/#Starred' },
    { label: 'Trash', icon: 'delete', path: '/#Trash' },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="sidebar">
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
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default Sidebar;