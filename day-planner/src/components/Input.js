import React from 'react'

const Input = ({todo, setTodo}) => {
    return (
        <div>
            <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
    )
}

export default Input
