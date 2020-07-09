import React, {useContext, useEffect} from 'react';
import './Disc.css';

export default function Disc(props) {

  return <div onClick={props.onClick}
              onMouseOver={props.onMouseOver}
              onMouseLeave={props.onMouseLeave}
              className={props.value === null ? "circle" : props.value}/>
}
