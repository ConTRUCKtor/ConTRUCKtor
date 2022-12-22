import {useUser} from "@auth0/nextjs-auth0";

function printName(useTemplate){
    if(useTemplate == true)
    {
        return "Guest"
    } else {
        const {user, loading} = useUser();
        return user.name
    }
}

export default function About() {

    const {user, loading} = useUser();
    let useTemplate = false

    if(user === undefined)
        useTemplate = true

    var styles = StyleSheet.create({
        headline: {
            textAlign: 'center', // <-- the magic
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 0,
            width: 200,
            backgroundColor: 'yellow',
        }
    })

    return (
        <>


            <h3 > Hello printName(useTemplate)! </h3>

            <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>

            <div className="card" style={{width: 18 + 'em'}}>
                <img className="card-img-top" src=" " alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"> test: {printName(useTemplate)} </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}