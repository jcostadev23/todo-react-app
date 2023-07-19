import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Button } from "./Button";
import {PremiumTodos} from "./PremiumTodos";

const Premium = ()=> {
    return (
        <Authenticator>
            {({signOut})=> (
                <div className="h-100 w-full flex items-center p-2 justify-center bg-teal-lightest font-sans">
                    <div className="bg-white rounded shadow p-4 w-full lg:w-3/4 lg:max-w-lg">
                       <PremiumTodos/>
                        <Button onClick={signOut}>SignOut</Button>
                    </div>
                </div>  
            )}
        </Authenticator>
    )
};
export default Premium;