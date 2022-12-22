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
    async function do_it(){
        let res = await fetch(`/api/user/${user.sub}`);
        console.log(await res.json());
    }

    return(
        <>
            <h1 className="text-center">Hello {user.name}</h1>
            <div className="d-flex justify-content-center">
            {toShow}
            </div>
        </>
    )
}

export const getServerSideProps = withPageAuthRequired();