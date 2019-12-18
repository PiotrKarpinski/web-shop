
const reducerName = 'card'
const createActionName = name => `root/${reducerName}/${name}`;

export const ADD_TO_CARD = createActionName('ADD_TO_CARD');


export const createAction_addToCard = payload => ({ payload , type: ADD_TO_CARD});
   

export default function reducer (state=[], action={}) {
    console.log(state)
    switch (action.type) {
        case ADD_TO_CARD:
          return action.payload
        default:
          return state;
    }
}