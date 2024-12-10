import {createStore} from 'redux'

const INT_VALUE = {
    counter:0
}
const reducer = (state = INT_VALUE, action)=>{
    return state;
}
const Store = createStore(reducer)
export default Store