import React from 'react'
import history from './history';

import "./styles.css";
import { Button } from "./components/Button";

export const Home = () => (
    <div className="App">
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Button onClick={() => { history.push('/spelpagina') }} type="button" buttonStyle="btn--danger--solid" buttonSize="btn--large">
            Speel
        </Button>
        </div>
    </div>

)