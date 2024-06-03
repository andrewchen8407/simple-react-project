import React, { useState } from 'react';
import Header from './components/Header';
import InputItem from './components/InputItem';
import ListItems from './components/ListItems';
import useFetchItems from './hooks/useFetchItems';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useFetchItems(setItems);

  const addItem = (title, dateTime) => {
    const newItem = { id: items.length + 1, title, dateTime: dateTime || '', completed: false };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newTitle, newDateTime) => {
    setItems(
      items.map(item => (item.id === id ? { ...item, title: newTitle, dateTime: newDateTime || '' } : item))
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
