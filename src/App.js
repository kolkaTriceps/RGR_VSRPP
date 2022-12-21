import React, { useState } from 'react';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { AuthContext } from './context';
import { store } from './redux/store';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
    }, []);

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                <BrowserRouter>
                    <Toaster
                        toastOptions={{
                            className: '',
                            style: {
                                backgroundColor: "#272a31",
                                color: "#f1f2f6"
                            },
                        }} />
                    <AppRouter />
                </BrowserRouter>
            </AuthContext.Provider>
        </Provider>
    );
}

export default App;