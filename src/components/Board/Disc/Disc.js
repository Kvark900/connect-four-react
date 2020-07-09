import React, {useContext, useEffect} from 'react';
import './Disc.css';

export default function Disc(props) {

  return <div onMouseOver={props.onMouseOver}
              onMouseLeave={props.onMouseLeave}
              className={props.value === null ? "circle" : props.value}/>
}
