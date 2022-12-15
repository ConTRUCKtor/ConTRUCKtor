import {useUser} from "@auth0/nextjs-auth0";
import LoginButton from "./loginbutton";
import LogoutButton from "./logoutbutton";
import Link from "next/link";

export default function Navbar(){
    const {user, isLoading} = useUser();

    if(isLoading){
        return <div>Loading...</div>;
    }

    let button;
    let profile;
    let split_menu;
    if(user != null){
        button = <LogoutButton />;
        profile = (<li><Link className="dropdown-item" href="/profile">Profile</Link></li>)
        split_menu = (
            <>
                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropstart</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    {profile}
                    <li><Link className="dropdown-item" href="/create_contract">Create Contract</Link></li>
                    <li><Link className="dropdown-item" href="/search_contract">Search for Contract</Link></li>
                </ul>
            </>
        )
    }else{
        button = <LoginButton />;
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="dropdown">
                    <a className="dropdown-toggle navbar-brand" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        Navbar
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" href="/">Home</Link></li>
                        <li><Link className="dropdown-item" href="/about">About</Link></li>
                    </ul>
                </div>
                <div className="dropdown dropstart">
                    {split_menu}
                    {button}
                </div>
            </div>
        </nav>
    )
}