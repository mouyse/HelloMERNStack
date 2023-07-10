import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export const autheReducer = (state, action) => {

    switch (action.type) {

        case 'LOGIN':
            return { user: action.payload }    
        case 'LOGOUT':
            return { user: null }
        default:
            return state

    }

}

export const AuthContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(autheReducer, {
        user: null
    })

    console.log('AuthContext State: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )

}