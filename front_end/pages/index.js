import {useUser} from "@auth0/nextjs-auth0";

export default function Home() {
    const {user, isLoading} = useUser();

    if (isLoading)
        return <p>Loading...</p>

    let username = user ? user.nickname : "Guest";

    return (
        <div className="bg-black">
            <br/> <br/>

            <h3 className="text-center text-info "> Welcome {username}! </h3>

            <br/> <br/>

            <div className="alert alert-primary"  role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                     &nbsp; ConTRUCKtor is currently in beta
            </div>


            <div className="card bg-white col-2">
                <img className="card-img-top" src={user.picture}/>
                <div className="card-body">
                    <h5 className="card-title justify-content-center"> {user.nickname} </h5>
                    <p className="card-text">
                        Your Email: {user.email}
                    </p>
                    <a href="#" className="btn btn-outline-success">Go to contruckts</a>
                </div>
            </div>

            <br/> <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div className="card text-white bg-success">
                            <div className="card-body">
                                <h5 className="card-title"> Create Contruckts </h5>
                                <p className="card-text"> Create Contruckts which Truckers can find and accept in a
                                    public overview.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <h5 className="card-title"> Find Contruckts </h5>
                                <p className="card-text"> Public list of available Contruckts from companies around the
                                    globe. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div className="card text-white bg-danger">
                            <div className="card-body">
                                <h5 className="card-title"> Your Contruckts </h5>
                                <p className="card-text"> View and edit your current, accepted and past Contruckts </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}