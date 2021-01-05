import React,{useState, createContext} from 'react';

export const buttonContext = createContext()

const ButtonContextProvider =(props)=>{
    const [toggleAuthor, setToggleAuthor] = useState(true) 

    return (
        <buttonContext.Provider value={{toggleAuthor, setToggleAuthor}}>
            {props.children}
        </buttonContext.Provider>
    )
}

export default ButtonContextProvider