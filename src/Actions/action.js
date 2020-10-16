import {DELETE_TODO} from './actionTypes'
export const addTodo=(todo,date)=>{
    const action={
        todo,
        date
    }
    return {
        type:'ADD_TODO',
        action
    }
}
export const deleteTodo=id=>{
    const action={
        id 
    }
    return {
        type:'DELETE_TODO',
        action
    }
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL'
};