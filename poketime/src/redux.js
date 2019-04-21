const { createStore } = Redux; 

const initState = {
  todos: [],
  post: []
  
}

function myreducer(state = initState , action){ 
  if (action.type = 'ADD_TODO'){
    return { 
      ...state,
      todos: [...state.todos, action.todo]
    }
  }

 if (action.type = 'ADD_POST'){
    return { 
      ...state,
      posts: [...state.todos, action.todo]
    }
  }
}
const store = createStore(myreducer);

store.subscribe(()=>{
  console.log('state updated');
  console.log(store.getState())
})

store.dispacth({type: 'ADD_TODO', todo: 'buy milk'})
store.dispacth({type: 'ADD_TODO', todo: 'sleep some more'})
store.dispacth({type: 'ADD_POST', post: 'Egg hunt with yoshi'})