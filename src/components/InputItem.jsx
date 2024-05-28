import React, { useState } from 'react';

const InputItem = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Item label is required');
      return;
    }
    addItem(title, dateTime);
    setTitle('');
    setDateTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-item">
      <input
        type="text"
        placeholder="Add item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default InputItem;
