import React, { useState } from 'react'


function TodoItem(props) {
  const [value, setValue] = useState(props.item);

  return props.isEditMode?(
  <span>
    <input 
        className="w-full h-10 p-1 text-black" 
        type="text" 
        placeholder="What is your task today?"
        value={value}
        onChange={(event)=>{
            setValue(event.target.value);
        }}
    />
    <button className="w-32 h-10 p-1 px-2 bg-indigo-300 rounded-none"
    onClick={()=>props.onDone(value, props.index)}>
        Done
        </button>
  </span>
  ):(
   <span className="flex">
        {props.item}
        <button onClick={()=>props.onEdit(props.index)} className="pl-4">
            Edit
        </button>

        <button onClick={()=>props.onDelete(props.item)} className="pl-4">
            Delete
        </button>

    </span>
    );
}
 


export default TodoItem