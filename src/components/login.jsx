import "../components/css/login.css"
import styled from "styled-components";
import { Link,useNavigate  } from "react-router-dom";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToken } from "../combineReducers/Logins/action";

import axios from "axios"

const Btn = styled.button`
    color: whitesmoke;
    font-weight: bolder;
    font-size: 16px;
    background-color: #da2424;
    border: 2px solid transparent;
    min-width: 180px;
    font-size: 16px;
    padding: 12px 32px;
    border-radius: 36px;
    background-clip: border-box;
    margin-top: -14px;
    margin-left: 0px;
    margin-right: 30px;
    &:hover{
        background-color: #8ec038;
    }
`;

function Login(){
    let navigate = useNavigate();
    const [toggle,setToggle]=useState(true)
    const [cred,setCred]=useState({
        passcode:"",
        email:""
    })

    const dispatch=useDispatch()
const getCred=(e)=>{
    console.log()
const {id,value}=e.target;
console.log(id,value)
setCred({
    ...cred,[id]:value
})
}

const passCred=(e)=>{
    e.preventDefault()
    if(cred.passcode.length==0||cred.passcode.length==0){
        return alert("Fields are empty")
    }
    if(cred.passcode.length==0||cred.passcode.length==0){
        return alert("Fields are empty")
    }
    axios.post('https://secret-basin-20477.herokuapp.com/login', {
        email: cred.email,
        password: cred.passcode
      })
      .then(function (response) {
        console.log(response.data);
        if(response.data=="Check username or password"){
alert("Check username or password")
return
        }else{
            dispatch(addToken(response.data))
            console.log(response.data)
            alert("Loin Sucessful")
            navigate(-1);
            
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}
const passCredReg=(e)=>{
    e.preventDefault()
    if(cred.passcode.length==0||cred.passcode.length==0){
        return alert("Fields are empty")
    }
    axios.post('https://secret-basin-20477.herokuapp.com/regeister', {
        email: cred.email,
        password: cred.passcode
      })
      .then(function (response) {
        console.log(response.data);
         if(response.data.message=="user already exist"){
            alert("user already exist")
            return
        }else{
            dispatch(addToken(response.data))
            navigate(-1);
            alert("Account Created Sucessfully")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}
    return(
        
            toggle ? <div className="login_form">
            <h1>Login</h1>
            <div className="form_input">
                <label>Username or email address<span>*</span></label><br />
                <input onChange={getCred} onBlur={getCred} id="email" type="text"></input><br />
                <label>Password<span>*</span></label><br />
                <input onChange={getCred} onBlur={getCred}  id="passcode" type="password"></input>
                <div className="btn">
                  <Btn onClick={passCred} className="butn">Log in</Btn>
                  <input className="check" type="checkbox"></input>
                  <label className="label_btn">Remember Me</label>
                </div>
                <p className="p"> <Link to="/lostpassword">Lost your password?</Link> </p>
                <button onClick={()=>{
                    setToggle(!toggle)
                }} style={{marginLeft:"20px"}}>SIgn Up ?</button>
            </div>
        </div>:<div className="login_form">
        <h1>Sign up</h1>
        <div className="form_input">
            <label>Username or email address<span>*</span></label><br />
            <input onChange={getCred} onBlur={getCred} id="email" type="text"></input><br />
            <label>Password<span>*</span></label><br />
            <input onChange={getCred} onBlur={getCred}  id="passcode" type="password"></input>
            <div className="btn">
              <Btn onClick={passCredReg} className="butn">Sign up</Btn>
              <input className="check" type="checkbox"></input>
              <label className="label_btn">Remember Me</label>
            </div>
            <p className="p"> <Link to="/lostpassword">Lost your password?</Link> </p>
            <button onClick={()=>{
                    setToggle(!toggle)
                }} style={{marginLeft:"20px"}}>Login ?</button>
        </div>
    </div>
        
        
    )
}

export {Login}