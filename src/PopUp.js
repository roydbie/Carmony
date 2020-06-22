import React, {useState} from 'react'
import history from './history';

import "./styles.css";
import { Button } from "./components/Button";
import { FaAngleLeft } from "react-icons/fa";

import ReactDOM from "react-dom";
import Popup from "reactjs-popup";

import Content from "./content.js";
import "./styles.css";

import Modal from 'react-bootstrap/Modal'
export const PopUp = () => (
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
	<>
	<h1>test</h1>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
	  render(<App />)
    </>
	
  );
}


)