import React from 'react'

const AllTodos = ({handleEdit,todos,handleDelete}) => {
    return (
        <div>
            <div className="allTodos">
          {todos.map((t) => (
            <div className="singleTodo">
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </div>
          ))}
        </div>
        </div>
    )
}

export default AllTodos
