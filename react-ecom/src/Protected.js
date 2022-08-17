import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Protected(props) {
    const history = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('user-info'))
    {
      history("/register");
    }
  },[])

    let PropComp = props.Cmp;
  return (
    <div>
        <PropComp />
    </div>
  )
}
