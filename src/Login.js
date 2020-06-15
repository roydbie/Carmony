import React from 'react'
import history from './history';

import "./styles.css";
import { Button } from "./components/Button";
import { FaAngleLeft } from "react-icons/fa";

export const Login = () => (

    <div className="App">
        <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Button onClick={() => { history.goBack() }} style="text-align: center;" type="button" buttonStyle="backbtn--icon--outline" buttonSize="btn--medium">
                <FaAngleLeft />
            </Button>
        </div>

        <div><h2>Login</h2></div>
    </div>
)