import React from "react";
import Todo from "./Todo";

const Todos=({todos,toggleTodo,deleteTodo})=>{
  console.log(deleteTodo)
  if(todos.length==0)
  return(
      <p>No todos for today!</p>
  )
  else{
  return(
  <div>
   {/* <ul className="collection">
            {
                todos.map(todo=>{
                   return(
                       <table>
                           <tr>
                               <td  key={todo.id}
                                            {...todo}
                                            onClick={() => toggleTodo(todo.id)}>
                                                <div>
                                                    {todo.todo}
                                                </div>
                               </td>
                               <td key={todo.id} className="collection-items">
                                    <div className="todo">
                                        {todo.date
                                        }
                                    </div>  
                               </td>
                               <td>
                                    <button onClick={(id)=>{deleteTodo(todo.id)}}>Delete</button>
                               </td>
                           </tr>
                       </table>
                     
                   )  
                })
            }
          </ul>*/}
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
                              <button onClick={(id)=>{deleteTodo(todo.id)}}>Delete</button>
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
export default Todos;