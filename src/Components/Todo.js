import React from 'react'
import PropTypes from 'prop-types'


const Todo = ({ onClick, completed, todo,date}) => (
    <table>
        <tr>
            <td   onClick={onClick}
                   style={{
                    color: completed ? 'green' : 'red'
                     }}>
            
            {todo}
             
 
            </td>
            <td   onClick={onClick}
                   style={{
                    color: completed ? 'green' : 'red'
                     }}>
            
            {date}
            </td>
            
        </tr>

    </table>
      
       
    
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo