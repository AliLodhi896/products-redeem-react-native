import React, {createContext,
    useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {

 const [isSignin, setIsSignin] = useState(false)
 const [description, setDescription] = useState(false)


 return (
   <AuthContext.Provider
     value={{
       isSignin, 
       setIsSignin,
       setDescription,
       description
     }}>
     {props.children}
   </AuthContext.Provider>
 );
};