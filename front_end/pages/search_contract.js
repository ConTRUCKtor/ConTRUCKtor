import {withPageAuthRequired} from "@auth0/nextjs-auth0";

export default function CreateContract(){
    return(
        <>
            <p>s</p>
        </>
    );
}

export const getServerSideProps = withPageAuthRequired();