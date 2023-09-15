import { Link } from 'react-router-dom';
import { Button } from './Button';
import { DataStore } from 'aws-amplify';

export function LoginAdvantages() {
    return (
        <div>
            <h2>
                Want to save your todocos online?
            </h2>
            <p>
                Saving your tocodos online makes it possible to access them from
                anywhere with any device.
            </p>
            <Link to="/login"><Button label='SignIn' /></Link>
        </div>
    )
}

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