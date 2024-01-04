//import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
function Profile() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  let logout = () => {
    //  Cookies.remove("token")
    removeCookie("token")

    //navigate to login
    window.location = "/";
  }

  return (
    <>
      <h1>My Profile {cookies.token}</h1>
      <button value="Logout" onClick={logout}>logout</button>
    </>
  );
}

export default Profile;
