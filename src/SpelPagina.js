import React, { useState } from 'react'
import Board from './components/Board'
import Card from './components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Button, Modal} from 'react-bootstrap'

function rollDice() {
  const dice = document.getElementById("die-list");
  toggleClasses(dice);
  dice.dataset.roll = getRandomNumber(1,6);
}

function toggleClasses(dice) {
  dice.classList.toggle("odd-roll");
  dice.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const SpelPagina = () => (


  <div className="joejoe">
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
    </Container><br/>

     <div className="dobbelsteen" onClick={rollDice}>
       <ol className="even-roll" id="die-list" data-roll="1">
         <li className="die-item" data-side="1">
           <span className="dot"></span>
         </li>
         <li className="die-item" data-side="2">
           <span className="dot"></span>
           <span className="dot"></span>
         </li>
         <li className="die-item" data-side="3">
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
         </li>
         <li className="die-item" data-side="4">
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
         </li>
         <li className="die-item" data-side="5">
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
         </li>
         <li className="die-item" data-side="6">
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
           <span className="dot"></span>
         </li>
       </ol>
     </div>

    {/* whenClicked is a property not an event, per se. <DicePopup />*/}

  </div>

)
