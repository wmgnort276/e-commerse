
import React, {useState} from 'react';
import LoginForm from "./LoginForm"
import {useEffect} from 'react'



function App() {
   

  const [userDatas,setUserDatas] = useState([])
  const userApi = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(userApi)
        .then(respone => respone.json())
        .then(userData => {
          setUserDatas(userData);
          // console.log(userDatas);
        })
},[])

  
  const [user,setUser] = useState({email:""});
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);

    if(userDatas.some(e => (e.email == details.email && e.username == details.password))){
      setError("No error");
    }
    else {
      // console.log("Infor not correct");
      setError("error");
    }
  }


  return (
    <div className="App">
    
      {(error === "No error") 
       ? (<h1>Home page here</h1>) 
       :
       (<LoginForm Login={Login} error={error}/>)
      }
    </div>
  );
}

export default App;
