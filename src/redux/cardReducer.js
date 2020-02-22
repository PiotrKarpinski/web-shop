
const reducerName = 'card'
const createActionName = name => `root/${reducerName}/${name}`;

export const ADD_TO_CARD = createActionName('ADD_TO_CARD');

export const REMOVE_FROM_CARD = createActionName('REMOVE_FROM_CARD');

export const createAction_addToCard = payload => ({ payload , type: ADD_TO_CARD});

export const createAction_removeFromCard = payload => ({ payload , type: REMOVE_FROM_CARD});

   

export default function reducer (state=[], action={}) {
    switch (action.type) {
        case ADD_TO_CARD:
        state.push(action.payload)
        return state;
        case REMOVE_FROM_CARD:        
        return state.filter( item  => item !== state[action.payload.product]);
        default:
          return state;
    }
}