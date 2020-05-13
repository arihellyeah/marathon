import React from 'react';
import './Exercise.css';

const exercise = (props) => {
  return (
    <div className='exercise'>
      <ul>
        <li>{props.week}</li>
        <li>{props.mon}</li>
        <li>{props.tue}</li>
        <li>{props.wed}</li>
        <li>{props.thu}</li>
        <li>{props.fri}</li>
        <li>{props.sat}</li>
        <li>{props.sun}</li>
      </ul>
    </div>
  )
}

export default exercise;
