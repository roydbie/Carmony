import React from 'react'
import history from './history';

import "./styles.css";
import { Button } from "./components/Button";
import { FaAngleLeft } from "react-icons/fa";

export const SpelPagina = () => (

    <div className="App">
        <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Button onClick={() => { history.goBack() }} type="button" buttonStyle="backbtn--icon--outline" buttonSize="btn--medium">
                <FaAngleLeft />
            </Button>
        </div>

        <div><h2>Spelpagina</h2></div>
    </div>
)