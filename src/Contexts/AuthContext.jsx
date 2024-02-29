import { createContext, useState } from "react";

const AuthContext = createContext();
const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account');
    const signOutInLocalStorage = localStorage.getItem('sign-out');
    let parsedAccount;
    let parsedSignOut;

    if(!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}));
        parsedAccount = {};
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage);
    }

    if(!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false));
        parsedSignOut = false;
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage);
    }
}

function AuthProvider({children}) {
    const [account, setAccount] = useState([]);
    const [signOut, setSignOut] = useState(false);

    return (
        <AuthContext.Provider value={{
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };