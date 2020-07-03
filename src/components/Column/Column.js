import React, {useEffect} from "react";
import Circle from "../Circle/Circle";

export default function Column(props) {
  return <div>
    {props.circles.map((el, i) =>
        <Circle key={i} value={el}/>
    )}
  </div>
}
