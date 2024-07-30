// import { Btn } from "../styledComponent/styleButton"
// import { Footer } from "./footer"
// import { Header } from "./headerPage"
// import { Nav } from "./navbar"
import styled from "styled-components";

import "../components/css/cart.css"



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


function LostPassword(){
    return(
        <div className="cart">
            {/* <Header />
            <hr />
            <Nav /> */}
            <div className="img_body">
              <h1>My account</h1>
          </div>
          <div className="body">
              <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
              <div className="input">
                <label>Username or email</label><br />
                <input type="text"></input>
              </div>
              <div>
                  <Btn>Reset Password</Btn>
              </div>
          </div>
          {/* <Footer /> */}
        </div>
    )
}

export {LostPassword}