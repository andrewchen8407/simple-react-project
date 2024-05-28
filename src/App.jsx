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
      .then(data => {
        const itemsWithDates = data.map(item => ({
          ...item,
          dateTime: getRandomDateTime()
        }));
        setItems(itemsWithDates);
      });
  }, []);

  const getRandomDateTime = () => {
    const randomDate = new Date(
      Date.now() + Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    );
    return randomDate.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
  };

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
