export default function reducer(state, action){
    switch(action.type){
        case 'number_add2':
            return{...state, number: state.number +2}
        case 'number_mult7':
            return{...state, number: state.number *7}
        case 'number_div25':
            return{...state, number: state.number /25}
        case 'number_add11':
            return{...state, number: state.number +11}
         case 'number_sub9':
            return{...state, number: state.number -9}
        case 'number_int':
            return{...state, number: parseInt(state.number)}
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}