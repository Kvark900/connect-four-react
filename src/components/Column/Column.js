import React, {useEffect} from "react";
import Circle from "../Circle/Circle";

export default function Column(circles) {
  return <div>
    {[...Array(6)].map(() =>
        <Circle/>
    )}
  </div>
}
