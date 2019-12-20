
const reducerName = 'card'
const createActionName = name => `root/${reducerName}/${name}`;

export const ADD_TO_CARD = createActionName('ADD_TO_CARD');


export const createAction_addToCard = payload => ({ payload , type: ADD_TO_CARD});
   
let order = []

export default function reducer (state=[], action={}) {
    switch (action.type) {
        case ADD_TO_CARD:
        order.push(action.payload)
          return order
        default:
          return state;
    }
}