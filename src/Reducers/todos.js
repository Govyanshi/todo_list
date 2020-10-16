import {ADD_TODO,DELETE_TODO} from '../Actions/actionTypes'
const initState=[];
const deleteByID=(state=initState,id)=>{
  const todos=state.filter(todo=>{
      return todo.id!==id;
  })
  return todos;
}
const todofn=(action)=>{
    return{
        todo:action.action.todo,
        date:action.action.date,
        id:Math.random()
    }
}

const todos=(state=initState,action)=>{
    let todos=null;
    switch(action.type){
        case ADD_TODO:
            todos=[...state,todofn(action)]
        return todos;
        case DELETE_TODO:
          todos=deleteByID(state,action.id.id)
          return todos;
        case "TOGGLE_TODO":
              return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
              );
        default:
            return state;
    }
}

export default todos;
/*const deleteByID=(state=[],id)=>{
  const todos=state.filter(todo=>{
      return todo.id!==id;
  })
  return todos;
}
const todos = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: Math.random(),
            todo: action.action.todo,
            date:action.action.date,
            completed: false
          }
        ];
    
          
      case "TOGGLE_TODO":
        console.log("aaa")
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
        case DELETE_TODO:
          todos=deleteByID(state,action.id)
          return todos;
      default:
        return state;
    }
  };*/
  
  
