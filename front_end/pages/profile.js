import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0"

export default function Profile(){
    const {user, isLoading} = useUser();

    if(isLoading){
        return <div>Loading...</div>;
    }

    let toShow;
    if(user != null){
        toShow = <img src={user.picture} className="img-thumbnail" alt="THIS IS A PICTURE OF YOUR STUPID FACE"
        width="200px"/>;
    }

    async function do_it(){
        let res = await fetch(`/api/user/${user.sub}`);
        console.log(await res.json());
    }

    return(
        <div className="container justify-content-center mt-5">
            <div className="card text-center mb-5">
                <div className="circle-image">
                    {toShow}
                </div>

                <span className="name mb-1 fw-500">{user.name}</span>
                <small className="text-black-50">{user.nickname}</small>
                <small className="text-black-50 font-weight-bold">{user.email}</small>

                <div className="dropdown mt-4">
                    <button className="btn btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown">
                    Bundesland
                    </button>
                    <div>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item">Wien</a></li>
                            <li><a className="dropdown-item">Niederösterreich</a></li>
                            <li><a className="dropdown-item">Burgenland</a></li>
                            <li><a className="dropdown-item">Steiermark</a></li>
                            <li><a className="dropdown-item">Kärnten</a></li>
                            <li><a className="dropdown-item">Salzbrug</a></li>
                            <li><a className="dropdown-item">Oberösterreich</a></li>
                            <li><a className="dropdown-item">Tirol</a></li>
                            <li><a className="dropdown-item">Voralberg</a></li>
                        </ul>
                    </div>

                </div>

                <div className="container-wrapper mt-4">
                    Rating
                    <div className="container align-items-center justify-content-center">
                        <div className="row justify-content-center">

                            <div className="rating-wrapper">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>

                                <svg type="radio" id="3-star-rating" name="star-rating" values="4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export const getServerSideProps = withPageAuthRequired();