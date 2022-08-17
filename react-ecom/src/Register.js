import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const history = useNavigate();

  async function signup()
  {
    let item = {name,email,password}
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/register",{
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
        <h1>Registration Page</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" /> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" placeholder="email" /> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" /> <br />
        <button onClick={signup} className='btn btn-primary'>SignUp</button>
    </div>
  )
}
