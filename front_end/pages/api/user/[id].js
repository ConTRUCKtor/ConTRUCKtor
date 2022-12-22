export default async function handler(req, res){
    const {id} = req.query;
    let response = await fetch(process.env.AUTH0_API_BASE_URL + "/users/" + id, {
        headers: {
            'Authorization': process.env.AUTH0_API_TOKEN
        },
    });
    let json = await response.json();
    res.status(200).json(json);
}