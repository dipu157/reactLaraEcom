import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header';

export default function Login() {

  const history = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      history("/add");
    }
  },[])

  async function login()
  {
    let item = {email,password}
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/login",{
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    history("/add");
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
      <Header />
        <h1>Login Page</h1>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" placeholder="email" /> <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" /> <br />
          <button onClick={login} className='btn btn-primary'>Login</button>
    </div>
  )
}
