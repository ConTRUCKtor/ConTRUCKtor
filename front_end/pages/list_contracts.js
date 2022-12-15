import {withPageAuthRequired} from "@auth0/nextjs-auth0";

export default function ListContracts(){
    return (<p>Test</p>)
}

export const getServerSideProps = withPageAuthRequired();