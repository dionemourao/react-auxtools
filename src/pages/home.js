import { Link } from "react-router-dom";

function home(){
    return(
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/settings">Settings</Link>
            </ul>

            <h1>home</h1>

        </div>
    );
}


export default home;