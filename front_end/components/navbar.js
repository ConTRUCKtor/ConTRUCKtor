import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./loginbutton";
import LogoutButton from "./logoutbutton";

export default function Navbar(){
    const {isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return <div>Loading...</div>;
    }

    let button;
    if(isAuthenticated){
        button = <LogoutButton />;
    }else{
        button = <LoginButton />;
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <a className="navbar-brand" href="#">Navbar</a>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled">Disabled</a>
                    </div>
                </div>
                {button}
            </div>
        </nav>
    )
}