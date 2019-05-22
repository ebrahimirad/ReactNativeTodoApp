export default todoSegment = (state = 'TODO_SEGMENT_TODO', action) => {
    switch (action.type) {
        case 'SET_TODO_SEGMENT':
            return action.name;
        default:
            return state;
    }
}