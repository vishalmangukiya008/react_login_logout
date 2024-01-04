//import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';


function Home() {

  console.log(`base ulr: ${process.env.REACT_APP_BASIC}`);

 const [cookies, setCookie,removeCookie] = useCookies(['token']);

let logout = ()=>{
  //  Cookies.remove("token")
  removeCookie("token")
    
    //navigate to login
    window.location="/";
}

  return (
    <>
    <h1>Home {cookies.token}</h1>
    <button value="Logout" onClick={logout}>logout</button>
    </>
  );
}

export default Home;
