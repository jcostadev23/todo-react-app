import { Button } from "./Button";
import { DataStore } from 'aws-amplify';

export function SignoutMessage({ signOut }) {
    return (
        <div>
            <Button
                onClick={async () => {
                    await DataStore.clear();
                    signOut();
                }}
                label='Sign out' />
        </div>
    )
}