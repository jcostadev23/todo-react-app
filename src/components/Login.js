import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { user } = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        if (user) {
            navigate("/");
        };
    }, [user, navigate])
    return <Authenticator>Login...</Authenticator>
};
export default Login;