export default function LogoutButton() {
    function go_to(){
        location.replace("/api/auth/logout");
    }

    return (
        <button type="button" className="btn btn-primary" onClick={go_to}>
            Log out
        </button>
    )
}