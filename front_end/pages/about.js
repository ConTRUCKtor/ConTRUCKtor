import {useUser} from "@auth0/nextjs-auth0";

export default function About() {


    const {user, isLoading} = useUser();

    if(isLoading)
        return <p>Loading...</p>

    let username = user ? user.name : "Guest";

    return (
        <>
            <h3 className="text-center"> Hello {username}! </h3>

            <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>

            <div className="card" style={{width: 18 + 'em'}}>
                <img className="card-img-top" src=" " alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"> test: {username} </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}