function Logout() {
    function eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.href = '/';
    }

    eraseCookie('login');
    
    return(
        <>
            Logging Out...
        </>
    )
}

export default Logout;