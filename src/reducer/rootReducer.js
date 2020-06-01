 import { INCREMENT, DECREMENT, TIMES, ID_INC } from "../action/type";
 const initialState={
     number:1,
     newTimes: new Date().toString(),
     id:''
     
 }

const reducer =(state = initialState , action)=>{

  switch(action.type){
    case INCREMENT:
          return Object.assign({},state,{number: state.number+1})
       
    case DECREMENT:
          return Object.assign({},state,{number: state.number-1})
        
    case TIMES:
        return state.newTimes

    case ID_INC:
        return Object.assign({},state,{id: action.id})

      default:
          return state
  }

}

export default reducer