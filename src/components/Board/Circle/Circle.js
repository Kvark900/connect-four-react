import React, {useEffect} from 'react';
import './Circle.css';

export default function Circle(props) {
  return <div onClick={props.onClick}
       className={props.value === null ? "circle" : props.value}/>
}
