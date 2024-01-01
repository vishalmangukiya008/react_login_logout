import Home from './home';
import Login from './login';
import Cookies from 'js-cookie';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  let isLogin = ()=>{
    const token = Cookies.get('token');
    if(token!=null){
  
      return <Home/>
    }else{
    
      return <Login/>
    }
  }


  return (
    <BrowserRouter basename="/">
      <Routes>
          <Route path="/" element={isLogin()}/>
          <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );


}

export default App;
