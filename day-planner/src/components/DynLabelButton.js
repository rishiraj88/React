import React from 'react'

const DynLabelButton = ({condition,trueLabel, falseLabel}) => {
    return (
        <div>
            <button type="submit">{condition ? trueLabel : falseLabel}</button>
        </div>
    )
}

export default DynLabelButton
