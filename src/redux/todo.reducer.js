const initialState = {
    todoList: []
}

const todoReducer = (state = initialState, {payload, type}) => {
    const { todoList } = state;
    switch(type) {
        case 'add': {
            return {
                ...state,
                todoList: [...todoList, payload]
            };
        }
        case 'addAll': {
            return {
                ...state,
                todoList: payload
            }
        }
        case 'delete': {
            const { curretId } = payload;
            return {
                ...state,
                todoList: todoList.filter(({id}) => curretId!==id)
            };
        }
        default: {
            return state;
        }
    }
}

export default todoReducer;
