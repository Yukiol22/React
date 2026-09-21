import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const {postLogin} = useAuthentication();
    const {getUserByToken} = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    // login, logout and autologin functions are here instead of components
    const handleLogin = async (credentials) => {
        try {
            const login = await postLogin(credentials)
            if (login.token){
                localStorage.setItem('token',login.token)
                setUser(login.user)
                navigate('/')
            }
            // TODO: post login credentials to API
            // TODO: set token to local storage
            // TODO: set user to state
            // TODO: navigate to home
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem('token')
            setUser(null)
            navigate('/')
            // TODO: remove token from local storage
            // TODO: set user to null
            // TODO: navigate to home or login page
        } catch (e) {
            console.log(e.message);
        }
    };

    // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
    const handleAutoLogin = async () => {
        try {
            const token = localStorage.getItem('token')
            if(token){
                const data = await getUserByToken(token)
                setUser(data.user)
                navigate('/')
            }
            // TODO: get token from local storage
            // TODO: if token exists, get user data from API
            // TODO: set user to state
            // TODO: navigate to home
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <UserContext.Provider value={{user, setUser, handleLogin, handleLogout, handleAutoLogin}}>
            {children}
        </UserContext.Provider>
    );
};
export {UserProvider, UserContext};