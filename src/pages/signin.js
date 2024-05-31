import { Link } from "react-router-dom";

function signin(){
    return(
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/settings">Settings</Link>
            </ul>

            <h1>signin</h1>

        </div>
    );
}


export default signin;