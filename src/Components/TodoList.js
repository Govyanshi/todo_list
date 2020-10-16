import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../Actions/action";
import Todo from "./Todo";


const Todos=({todos,toggleTodo,deleteTodo})=>{
  if(todos.length==0)
  return(
      <p>No todos for today!</p>
  )
  else{
  return(
  <div>
       
        {
              todos.map(todo=>{
                 return(
                     <table style={{border:"2px solid black"}}>
                      
                         <tr>
                             <td> <Todo key={todo.id}
                                         {...todo}
                                          onClick={() => toggleTodo(todo.id)}/>                  
                             </td>
                             <td>
                              <button onClick={()=>deleteTodo(todo.id)} >Delete</button>
                               <button>Edit</button>
                            </td>    
                         </tr>
                     </table>
                   
                 )  
              })
          }
        
  </div>
  )
      }
  } 
const mapDispatchToProps = dispatch=>{
    return{
        deleteTodo:id=>dispatch(deleteTodo(id))
    }
}
export default connect(
    null,
    mapDispatchToProps
) (Todos)
