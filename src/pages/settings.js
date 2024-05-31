import { Link } from "react-router-dom";

function settings(){
    return(
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/settings">Settings</Link>
            </ul>

            <h1>settings</h1>

        </div>
    );
}


export default settings;