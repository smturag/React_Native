import {INCREMENT,DECREMENT, TIMES, ID_INC} from './type'
let idInc = 1

 function increment(){
    return{
        type: INCREMENT
    }
}
 function decrement(){
    return{
        type: DECREMENT
    }
}
function idIncrement(){
    return{
        type: ID_INC,
        id: idInc++
    }
}
function newTimes(){
    return{
        type: TIMES
    }
}

export{newTimes,increment,decrement,idIncrement}