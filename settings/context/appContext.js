import { createContext,useState } from "react";

const AppContext = createContext ();

const AppProvider = ({children}) => {
const [uid,setUid] = useState('jgdjajh');
const [email,setEmail] = useState('streemluv4allmail.com')

return (
    <AppContext.Provider value={{uid,setUid,email,setEmail}}>
        {children}
    </AppContext.Provider>
)
}

export {AppContext,AppProvider }