const initState = {
    method: '',
    view: ''
}

const Reducer = (state=initState, action)=>{
    switch (action.type) {
        case 'changeMethod':
            return state = {...state, method: action.payload}            
        case 'changeView':
            return state = {...state, view: action.payload}
        default:
            return state
    }    
}

export default Reducer