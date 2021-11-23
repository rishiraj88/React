import React from 'react'
import DynLabelButton from './DynLabelButton'
import Input from './Input'

const MainForm = ({todo,setTodo, editId, handleSubmit}) => {
    return (
        <div>
            <form className="todoForm" onSubmit={handleSubmit}>
          <Input todo={todo} setTodo={setTodo} />
          <DynLabelButton condition={editId} trueLabel="Update" falseLabel="Add"/>
        </form>
        </div>
    )
}

export default MainForm

