export default function courseReducer(state = [], action){
  switch(action.type){
      case 'CREATE_COURSE':
        return [...state,
        Object.assign({},action.course)]; // spread operator - take all values of state, use assign to create deep copy and create a new object
      default:
           return state;
  }
}
