import React, { useState } from 'react';

const SearchFilterComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const items = [
    'Sankalpa',
    'Bikalpa',
    'Apil',
    'Chamatkar',
    'Abishkar',
    'Zero',
    'Hero',
    'Keyboard'
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#4a4a4a' }}>Employee Name</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          fontSize: '18px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '12px',
              backgroundColor: '#f4f4f4',
              marginBottom: '10px',
              borderRadius: '6px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              fontSize: '16px',
              color: '#333',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilterComponent;
