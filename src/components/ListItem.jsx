import React, { useState } from 'react';
import './ListItem.css'; 

const ListItem = ({ item, deleteItem, editItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDateTime, setNewDateTime] = useState(item.dateTime);

  const handleSave = () => {
    editItem(item.id, newTitle, newDateTime);
    setIsEditing(false);
  };

  const displayDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return isNaN(date.getTime()) ? "No date/time added" : date.toLocaleString();
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="datetime-local"
            value={newDateTime}
            onChange={(e) => setNewDateTime(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div className="item-title-box">
            <span>{item.title}</span>
          </div>
          <div className="item-datetime-box">
            <span>{displayDateTime(item.dateTime)}</span>
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ListItem;
