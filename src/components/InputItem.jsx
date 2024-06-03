import React, { useState, useEffect, useRef } from 'react';

const InputItem = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');
  const inputRef = useRef(null); // Ref for input field
  const charCountRef = useRef(0); // Ref for character count
  const MAX_CHARACTERS = 99; // Maximum character limit

  useEffect(() => {
    const handleInputChange = () => {
      charCountRef.current = inputRef.current.value.length;
      // Limit the character count to MAX_CHARACTERS
      if (charCountRef.current > MAX_CHARACTERS) {
        setTitle(prevTitle => prevTitle.slice(0, MAX_CHARACTERS)); // Trim the title
        charCountRef.current = MAX_CHARACTERS; // Update the character count
      }
      // Update the character count in real-time
      setCharCount(charCountRef.current);
    };

    inputRef.current.addEventListener('input', handleInputChange);

    return () => {
      inputRef.current.removeEventListener('input', handleInputChange);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Item label is required');
      return;
    }
    addItem(title, dateTime);
    setTitle('');
    setDateTime('');
    inputRef.current.focus(); // Focus on input field after adding item
  };

  return (
    <form onSubmit={handleSubmit} className="input-item">
      <input
        type="text"
        placeholder="Add item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={MAX_CHARACTERS} // Set maximum character limit
        required
        ref={inputRef} // Attach ref to input field
      />
      <span>{charCountRef.current}/{MAX_CHARACTERS} characters </span>
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
