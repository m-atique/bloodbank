import { adduser} from "../actions"

const intial_state = {

    users: [],
    allusers:{},
    blooddoners:[]

}

export default (state = intial_state, action) => {


    switch (action.type) {
        case 'getData':
            console.log(state)
            return ({
                ...state,
                users: [action.payload, ...state.users]
            })

        case 'getusers':
            
            return ({
                ...state,
                 allusers: action.payload
            })

        case 'mydoner':
        return({
            ...state,
            blooddoners:action.payload

        })
        



    }

    return state
}