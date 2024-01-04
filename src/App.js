import Home from './home';
import Profile from './profile';
import Login from './login';
import { useCookies } from 'react-cookie';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [cookies] = useCookies(['token']);

  let isLogin = (page) => {
    const token = cookies.token;
    if (token != null) {
    
      return page
      //navigate to login
    
    } else {
     // window.location="/";
      return <Login />

    }
  }


  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={isLogin(<Home />)} />
        <Route path="/home" element={isLogin(<Home />)} />
        <Route path="/profile" element={isLogin(<Profile />)} />

      </Routes>
    </BrowserRouter>
  );


}

export default App;
