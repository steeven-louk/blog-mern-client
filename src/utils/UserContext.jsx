import { createContext, useState } from "react"

export const UserContext = createContext();


const UserProvider = ({children})=>{

    const [user, setUser] = useState('')
    const getToken = JSON.parse(localStorage.getItem('token'))

    if(!getToken) return '' ;
    setUser(getToken);

    return(
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider