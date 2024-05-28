import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ items, deleteItem, editItem }) => {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />
      ))}
    </ul>
  );
};

export default ListItems;
