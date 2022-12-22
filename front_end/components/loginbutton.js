export default function LoginButton() {
    function go_to(){
        location.replace("/api/auth/login");
    }

    return (
        <button type="button" className="btn btn-primary" onClick={go_to}>
            Log in
        </button>
    );
}