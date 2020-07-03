import React, {useEffect} from "react";
import Circle from "../Circle/Circle";

export default function Column(props) {
  return <div>
    {props.circles.map((el, i) =>
        <Circle onClick={props.onClick}
                key={i}
                value={el}/>
    )}
  </div>
}
