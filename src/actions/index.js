let inceasingTodoId = 0;
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: inceasingTodoId++
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id: id
});

export const setTodoSegment = (name) => ({
    type: 'SET_TODO_SEGMENT',
    name: name
});