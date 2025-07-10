export default function reducer(state, action) {

    switch(action.type) {
        case 'set': 
            return action.payload
        case 'add': 

            // give new employees a unique id and a random image id
            action.payload.id = state[state.length - 1].id + 1
            action.payload.imageId = Math.floor(Math.random() * 10)
        
            return [...state, action.payload]
    }

    return state
}