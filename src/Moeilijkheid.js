import React from 'react'
import history from './history';


import "./styles.css";
import { Button } from "./components/Button";
import { FaAngleLeft } from "react-icons/fa";

const tekstStyle = {
    color: '#F27405',
    fontSize: '24px',
    fontFamily: 'Montserrat',
};
export const Moeilijkheid = () => (

    <div className="App">

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ul>
                <li style={{ listStyleType: "none" }}><h2 style={tekstStyle}>Kies je moeilijkheid</h2></li>
                <li style={{ listStyleType: "none" }}>

                    <Button onClick={() => { history.push('/spelpagina') }} type="buttonIcon" buttonStyle="btn--makkelijk--solid" buttonSize="btn--medium">
                        Makkelijk
        </Button>

                    <Button onClick={() => { }} type="buttonIcon" buttonStyle="btn--gemiddeld--solid" buttonSize="btn--medium">
                        Gemiddeld
        </Button>

                    <Button onClick={() => { }} type="buttonIcon" buttonStyle="btn--moeilijk--solid" buttonSize="btn--medium">
                        Moeilijk
        </Button>
                </li>
            </ul>

        </div>

        <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Button onClick={() => { history.goBack() }} type="button" buttonStyle="btn--icon--outline" buttonSize="btn--small">
                <FaAngleLeft />
            </Button>
        </div>
    </div>

)