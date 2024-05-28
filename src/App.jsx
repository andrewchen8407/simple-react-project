import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputItem from './components/InputItem';
import ListItems from './components/ListItems';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const addItem = (title) => {
    const newItem = { id: items.length + 1, title, completed: false };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newTitle) => {
    setItems(
      items.map(item => (item.id === id ? { ...item, title: newTitle } : item))
    );
  };

  return (
    <div className="App">
      <Header />
      <InputItem addItem={addItem} />
      <ListItems items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default App;
