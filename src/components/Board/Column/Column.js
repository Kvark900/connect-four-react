import React, {useEffect} from "react";
import Disc from "../Disc/Disc";

export default function Column(props) {
  return <div>
    {props.circles.map((el, i) =>
        <Disc onClick={props.onClick}
              key={i}
              value={el}/>
    )}
  </div>
}
