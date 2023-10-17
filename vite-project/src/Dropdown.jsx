/* eslint-disable react/prop-types */
// Dropdown.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Dropdown.css";
const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedItem ? selectedItem : 'Select an option'}
      </button>
      {isOpen && (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <ul className="dropdown-list">
          // eslint-disable-next-line react/prop-types
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
