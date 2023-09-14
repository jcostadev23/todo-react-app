import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { user } = useAuthenticator((context) => [context.user]);

    if (user) {
        navigate("/");
    };

    return <Authenticator>login</Authenticator>
};
export default Login;