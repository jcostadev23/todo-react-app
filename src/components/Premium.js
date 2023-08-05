import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "./Button";
import { PremiumTodos } from "./PremiumTodos";
import { DataStore } from "aws-amplify";

const Premium = ()=> {
    return (
        <Authenticator>
            {({signOut})=> (
                <div>
                     <PremiumTodos/>
                     <Button 
                        onClick={()=>{
                        DataStore.clear()
                        signOut()
                        }}
                        label='SignOut'/>
                </div>  
            )}
        </Authenticator>
    )
};
export default Premium;