import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { AuthContext } from "../context";
import { accounts } from "../data/accounts";
import { setCurUserAcion } from "../redux/actions/LoginActions";

const Login = () => {

    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loginMessage, setLoginMessage] = useState(<p>Login to get started!</p>);
    const { setIsAuth } = useContext(AuthContext);

    const onLoginSubmit = (event) => {
        event.preventDefault();

        if (accounts.find(account => account.email === credentials.email && account.password === credentials.password)) {
            setIsAuth(true);
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", credentials.email.split("@")[0])
            dispatch(setCurUserAcion(credentials))
            toast.success("You are logged in!")
        }
        else {
            setLoginMessage(<p style={{ color: "#d33030" }}>Invalid email or password!</p>);
            toast.error("Invalid Email or Password!")
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    }

    return (
        <LoginForm
            credentials={credentials}
            loginMessage={loginMessage}
            onLoginSubmit={onLoginSubmit}
            handleChange={handleChange}
        />
    );
}

export default Login;