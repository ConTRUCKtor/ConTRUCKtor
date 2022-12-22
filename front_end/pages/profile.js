import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0"

export default function Profile(){
    const {user, isLoading} = useUser();
    
    if(isLoading){
        return <div>Loading...</div>;
    }

    let toShow;
    if(user != null){
        toShow = <img src={user.picture} className="img-thumbnail" alt="THIS IS A PICTURE OF YOUR STUPID FACE"/>;
    }

    return(
        <>
        {toShow}
        </>
    )
}

export const getServerSideProps = withPageAuthRequired();