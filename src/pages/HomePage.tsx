import { useAuthContext } from "@asgardeo/auth-react";

const HomePage = () => {
  const { state, signIn, signOut } = useAuthContext();
    return (
        <div id='App-homePage'>
            <div id='loginSection' className='App-button'>
            <button onClick={ () => signIn() }>Login</button>
            </div>
            <div className='App-body' id='HomePage-body'>
                <h1>Home Page</h1>
                <p>
                OIDC Sample application base.
                This page will be shown when the user is not logged in.
                </p>
            </div>
        </div>
    );
};

export default HomePage;