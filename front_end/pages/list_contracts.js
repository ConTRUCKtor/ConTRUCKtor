import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import {useEffect, useState} from "react";

export default function ListContracts(){
    const [contracts, setContracts] = useState([]);


    return (
        <>
            {contracts}
        </>
    )
}

export const getServerSideProps = withPageAuthRequired();