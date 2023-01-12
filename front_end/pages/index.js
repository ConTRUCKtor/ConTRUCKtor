import {useUser} from "@auth0/nextjs-auth0";

export default function Home() {
    const {user, isLoading} = useUser();

    if (isLoading)
        return <p>Loading...</p>

    let username = user ? user.nickname : "Guest";



    return (
        <>
            <h3 className="text-center"> Welcome {username}! </h3>

            <div className="alert alert-primary d-flex" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" height={10} fill="currentColor"
                     className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>
                    Currently in beta
                </div>
            </div>


            <div className="card" style={{width: 25 + 'em'}}>
                <img className="card-img-top" src={user.picture}/>
                <div className="card-body">
                    <h5 className="card-title"> {user.nickname} </h5>
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
                        <div className="card text-white bg-primary">
                                <div className="card-body">
                                    <h5 className="card-title">Card Title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <div className="card text-white bg-secondary">
                                <div className="card-body">
                                    <h5 className="card-title">Card Title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                <div className="col-lg-4 col-md-4 col-sm-8">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                </div>

                
            </div>
        </>
)
}