import React, {useEffect} from 'react';
import './Disc.css';

export default function Disc(props) {
  return <div onClick={props.onClick}
       className={props.value === null ? "circle" : props.value}/>
}
