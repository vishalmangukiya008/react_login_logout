
import React, { useState } from "react";
//import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';


function Login() {
    const [cookies, setCookie] = useCookies(['token']);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = e => {
        e.preventDefault();

        console.log("test")

        PostData(email, password,setCookie).then(result => {
            console.log(result);
        });

    };
    return (
        <div className="search_box">
            <form onSubmit={submitForm}>
                <input
                    name="email"
                    type="text"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="search"
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>

    );
}

export default Login;



function PostData(email, password,setCookie) {
   
    let BaseUrl = "http://192.168.1.7:8080/user/login";


    return new Promise((resolve, reject) => {
        fetch(BaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(response => response.json())
            .then(responseJson => {

                const token = responseJson.token;
                if (token != null) {
                    setCookie('token', token);

                    //Cookies.set('token', token, { expires: 7, secure: true });
                    //navigate to home
                    window.location = "/home";
                }
                else {
                    alert('Username or password is wrong')
                }


            })
            .catch(error => {
                reject(error);
            });
    })
}