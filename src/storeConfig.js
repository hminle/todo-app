console.log("test redux");

var redux = require('redux');
var defaultState = {
    items: ['Example Job 1', 'Example Job 2', 'Example Job 3']
}
var reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.item]}    
        case 'REMOVE_ITEM':
            return {...state, items: state.items.filter((e, i) => i !== action.index)}
        default:
            return state;
    }
}

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension? window.devToolsExtension(): f => f
));
//store.subscribe(() => console.log(store.getState()));


store.dispatch({
    type: 'ADD_ITEM',
    item: 'Example Job 4'
});


// store.dispatch({
//     type: 'REMOVE_ITEM',
//     index: 3
// });

module.exports = store;