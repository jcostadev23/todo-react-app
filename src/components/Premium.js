import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "./Button";
import { PremiumTodos } from "./PremiumTodos";
import { DataStore } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import '../styles.css';

const Premium = ()=> {
    return (
        <Authenticator>
            {({signOut})=> (
                <div>
                    <PremiumTodos/>
                    <div className="button-signOut">
                        <Button 
                            onClick={()=>{
                            DataStore.clear()
                            signOut()
                            }}
                            label='SignOut'/>
                    </div>
                </div>  
            )}
        </Authenticator>
    )
};
export default Premium;