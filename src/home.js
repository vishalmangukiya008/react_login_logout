import Cookies from 'js-cookie';

function Home() {

let logout = ()=>{
    Cookies.remove("token")
    //navigate to login
    window.location="/";
}

  return (
    <>
    <h1>Home</h1>
    <button value="Logout" onClick={logout}>logout</button>
    </>
  );
}

export default Home;
