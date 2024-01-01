
import React, { useState } from "react";
import Cookies from 'js-cookie';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = e => {
        e.preventDefault();

        console.log("test")

        PostData(email, password).then(result => {
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
                    <br/>
                    <input
                        name="password"
                        type="password"
                        placeholder="search"
                        onChange={e => setPassword(e.target.value)}
                    />
                     <br/>
                    <input type="submit" value="login" />
                </form>
            </div>
        
    );
}

export default Login;



function PostData(email,password) {
    let BaseUrl = "http://192.168.1.10:8080/user/login";
   
   
    return new Promise((resolve, reject) => {
        fetch(BaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({email:email,password:password})
        })
            .then(response => response.json())
            .then(responseJson => {
                
                const token = responseJson.token;
                Cookies.set('token', token, { expires: 7, secure: true });
                //navigate to home
                window.location="/home";
            })
            .catch(error => {
                reject(error);
            });
    })
}