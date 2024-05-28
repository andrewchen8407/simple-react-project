import React, { useState } from 'react';

const InputItem = ({ addItem }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addItem(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputItem;
