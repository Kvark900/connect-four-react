import React, {useContext, useEffect} from "react";
import Disc from "../Disc/Disc";
import {GameContext} from "../../../App";

export default function Column(props) {
  return <div>
    {props.discs.map((el, i) =>
        <Disc onMouseOver={props.onMouseOver}
              onMouseLeave={props.onMouseLeave}
              key={i}
              value={el}/>
    )}
  </div>
}
