import React, { useState } from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';
import edit_icon from '../assets/edit.png'; 

const ToDoItems = ({ text, id, isComplete, date, completedDate, deleteTodo, toggle, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(id, editedText); 
    }
    setIsEditing(!isEditing); 
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-2 my-4">
      
      <div className="flex items-start cursor-pointer" onClick={() => toggle(id)}>
        <img src={isComplete ? tick : not_tick} alt="Toggle status" className="w-6 mt-1" />
        <div className="ml-4">
          
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="text-slate-700 text-lg outline-none border-b-2 border-gray-400"
            />
          ) : (
            <p className={`text-slate-700 text-lg decoration-slate-500 ${isComplete ? 'line-through' : ''}`}>
              {text}
            </p>
          )}
          
          <p className="text-sm text-gray-500">Added on: {date}</p>
        </div>
      </div>

      
      {isComplete && completedDate && (
        <p className="text-sm text-green-500 ml-10">Completed on: {completedDate}</p>
      )}

      
      <div className="flex justify-end gap-2">
        <button onClick={handleEdit} className="text-blue-500 cursor-pointer">
          {isEditing ? 'Save' : ''}
        </button>
        <img
          onClick={(e) => {
            e.stopPropagation(); 
            deleteTodo(id);
          }}
          src={delete_icon}
          alt="Delete"
          className="w-5 cursor-pointer"
        />
        
        <img
          onClick={handleEdit}
          src={edit_icon} 
          alt="Edit"
          className="w-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ToDoItems;
