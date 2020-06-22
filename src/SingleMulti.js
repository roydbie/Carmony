import React from 'react'
import history from './history';


import "./styles.css";
import { Button } from "./components/Button";
import { FaAngleLeft } from "react-icons/fa";

export const SingleMulti = () => (
    <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
<ul>
            <Button onClick={() => { history.push('/moeilijkheid') }} type="buttonIcon" buttonStyle="btn--danger--solid" buttonSize="btn--medium">
                Alleen Spelen
        </Button>
        <Button onClick={() => { }} type="buttonIcon" buttonStyle="btn--danger--solid" buttonSize="btn--medium">
                Met vrienden spelen
        </Button>
        </ul>
        </div>

        <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Button onClick={() => { history.goBack() }} type="button" buttonStyle="btn--icon--outline" buttonSize="btn--small">
                <FaAngleLeft />
            </Button>
        </div>
    </div>

)