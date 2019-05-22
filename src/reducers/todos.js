export default todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    is_completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((item) => {
                if (item.id !== action.id) {
                  return item
                }
            
                return {
                  id: item.id,
                  text: item.text,
                  is_completed: !item.is_completed
                }
              });
        default:
            return state;
            break;
    }
}