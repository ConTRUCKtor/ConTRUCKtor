import {useState} from "react";
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0";

export default function CreateContract(){
    const {user, isLoading} = useUser();

    if(isLoading){
        return <div>Loading...</div>;
    }

    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [cargoInformation, setCargoInformation] = useState("");

    function fromLocationChange(event){
        setFromLocation(event.target.value);
    }

    function toLocationChange(event){
        setToLocation(event.target.value);
    }

    function textAreaChange(event){
        setCargoInformation(event.target.value);
    }

    async function createContract(){
        const dataToSend = {
            'from_location': fromLocation,
            'to_location': toLocation,
            'cargo_information': cargoInformation,
            'from_user': user.sub
        };
        const res = await fetch('http://127.0.0.1:8000/create_contract', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
        });
        if(res.status == 201)
            location.replace("/list_contracts");
        else
            alert("INCORRECT INPUT");
    }

    return(
        <div className="container mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="fromLocation" className="form-label">From</label>
                    <input type="text" className="form-control" id="fromLocation" aria-describedby="From Location" onChange={fromLocationChange}/>
                        <div className="form-text">Location where Cargo will be picked up</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="toLocation" className="form-label">To</label>
                    <input type="text" className="form-control" id="toLocation" aria-describedby="To Location" onChange={toLocationChange}/>
                    <div className="form-text">Location where Cargo will be delivered</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cargoInformation" className="form-label">Cargo Information</label>
                    <textarea className="form-control" aria-label="Cargo Information" onChange={textAreaChange}></textarea>
                    <div className="form-text">All Information about Cargo</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={createContract}>Create</button>
            </form>
        </div>
    );
}

export const getServerSideProps = withPageAuthRequired();