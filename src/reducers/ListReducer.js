import { combineReducer } from 'redux';

const InitialState = {
    Todo:[{
        id:"",
        topic:"",
        content:"",
        date: '04-06-2021',
        isdone: false,
    }]
};

const ListReducer = (state = InitialState,action) => {

    switch(action.type){
        case 'addTodo':
            return {...state, 
                Todo:[
                    ...state.Todo,
                    {
                        id:action.payload.id,
                        topic:action.payload.topic,
                        content:action.payload.content,
                        date:action.payload.date,
                        isdone:action.payload.isdone
                    }
                ]
            };
        
        case 'editTodo':
            return {...state,
                Todo:state.Todo.map((todoItem) => {
                    return (todoItem.id === action.payload.id)?action.payload:todoItem; 
            })
        }

        case 'deleteTodo':
            console.log(action.payload)
            return {...state,
                Todo:state.Todo.filter((item) => item.id !== action.payload)
        }

        default:
            return state
    }
}

export default ListReducer;
