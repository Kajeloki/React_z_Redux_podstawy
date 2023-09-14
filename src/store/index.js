import {createStore} from 'redux';
const initialState = {counter: 0, showCounter: true}
const counterReducer = (state=initialState, action) =>{
    if(action.type==='inc'){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    };
    if(action.type==='dec'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    };
    if(action.type==='ince'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    };
    if(action.type==='toogle'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    };
    
        return state;
    
    
};

const counterSubscriber = ()=>{
    const lastState = store.state;
   // console.log(lastState);
};

const store = createStore(counterReducer);
store.subscribe(counterSubscriber)



export default store;