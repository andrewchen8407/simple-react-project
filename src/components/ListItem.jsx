import React, { useState } from 'react';

const ListItem = ({ item, deleteItem, editItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing && newTitle) {
      editItem(item.id, newTitle);
    }
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{item.title}</span>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  );
};

export default ListItem;
