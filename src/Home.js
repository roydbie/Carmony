import React from 'react'
import history from './history';

import "./styles.css";
import { Button } from "./components/Button";
import { FaAngleLeft } from "react-icons/fa";

export const Home = () => (
    <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

            <Button onClick={() => { history.push('/spelpagina') }} type="buttonIcon" buttonStyle="btn--danger--solid" buttonSize="btn--large">
                Speel
        </Button>

        </div>

        <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Button onClick={() => { history.goBack() }} type="button" buttonStyle="backbtn--icon--outline" buttonSize="btn--medium">
                <FaAngleLeft />
            </Button>
        </div>
    </div>

)