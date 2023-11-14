import React, {createContext,
    useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {

 const [isSignin, setIsSignin] = useState(false)
 const [userDetails, setUserDetails] = useState({})
 const [userToken, setUserToken] = useState(null)
 const [appInfo, setAppInfo] = useState(null)

 return (
   <AuthContext.Provider
     value={{
       isSignin, 
       setIsSignin,
       setUserToken,
       userToken,
       setUserDetails,
       userDetails,
       setAppInfo,
       appInfo
     }}>
     {props.children}
   </AuthContext.Provider>
 );
};