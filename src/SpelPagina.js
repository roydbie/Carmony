import React, { useState } from 'react'
import Board from './components/Board'
import Card from './components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Button, Modal} from 'react-bootstrap'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(3));

function DicePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export const SpelPagina = () => (


  <div>
  <br/>
    <Container className="containerrr">
      <Row className="rowww">
        <Col className="colll null"><Board id="24" className="board"><p>23</p></Board></Col>
        <Col className="colll blue"><Board id="23" className="board"><p>22</p></Board></Col>
        <Col className="colll orange"><Board id="22" className="board"><p>21</p></Board></Col>
        <Col className="colll blue"><Board id="21" className="board"><p>20</p></Board></Col>
        <Col className="colll null"><Board id="20" className="board"><p>19</p></Board></Col>
        <Col className="colll orange"><Board id="19" className="board"><p>18</p></Board></Col>
      </Row>
      <Row className="rowww">
        <Col className="colll blue"><Board id="13" className="board"><p>12</p></Board></Col>
        <Col className="colll orange"><Board id="14" className="board"><p>13</p></Board></Col>
        <Col className="colll blue"><Board id="15" className="board"><p>14</p></Board></Col>
        <Col className="colll null"><Board id="16" className="board"><p>15</p></Board></Col>
        <Col className="colll orange"><Board id="17" className="board"><p>16</p></Board></Col>
        <Col className="colll null"><Board id="18" className="board"><p>17</p></Board></Col>
      </Row>
      <Row className="rowww">
        <Col className="colll null "><Board id="12" className="board"><p>11</p></Board></Col>
        <Col className="colll null"><Board id="11" className="board"><p>10</p></Board></Col>
        <Col className="colll orange"><Board id="10" className="board"><p>9</p></Board></Col>
        <Col className="colll blue"><Board id="9" className="board"><p>8</p></Board></Col>
        <Col className="colll orange"><Board id="8" className="board"><p>7</p></Board></Col>
        <Col className="colll null"><Board id="7" className="board"><p>6</p></Board></Col>
      </Row>

      <Row className="rowww">
        <Col className="colll null"><Board id="1" className="board"><Card id="card-1" className="card" draggable="true"></Card></Board></Col>
        <Col className="colll blue"><Board id="2" className="board"><p>1</p></Board></Col>
        <Col className="colll orange"><Board id="3" className="board"><p>2</p></Board></Col>
        <Col className="colll null"><Board id="4" className="board"><p>3</p></Board></Col>
        <Col className="colll blue"><Board id="5" className="board"><p>4</p></Board></Col>
        <Col className="colll orange"><Board id="6" className="board"><p>5</p></Board></Col>
      </Row>
    </Container>

    <DicePopup />

  </div>

)
