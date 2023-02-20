
import { useAuthContext } from "@asgardeo/auth-react";

const LandingPage = () => {
    const { state, signIn, signOut } = useAuthContext();

    return (
        <div id='App landing page'>
            <div id='LandingPage-controler-section' className='App-button'>
                <button >GetResources</button>
                <button onClick={ () => signOut() }>Logout</button>
            </div>
            <div className='App-body' id='LandingPage-body'>
                <h1>Landing Page</h1>
                <p>
                    This is the landing page. You can only see this page if you have a valid login session.<br/>
                    state.isAuthenticated: {state.isAuthenticated.toString()}
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
