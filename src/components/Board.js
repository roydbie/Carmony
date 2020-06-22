import React from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Board (props) {
const drop = e => {
  e.preventDefault();
  const card_id = e.dataTransfer.getData('card_id');

  const card = document.getElementById(card_id);
  card.style.display = 'block';
  var divnum = 3;
  var divstring = '' + divnum;
  if (props.id === divstring) {
    console.log(getRandomInt(3));
    console.log('het nummer hierboven was een test.');
  }

  e.target.appendChild(card);

}

const dragOver = e => {
  e.preventDefault();
}

  return (
    <div id={props.id} onDrop={drop} onDragOver={dragOver} className={props.className}>

    { props.children }

    </div>

  )


}

export default Board