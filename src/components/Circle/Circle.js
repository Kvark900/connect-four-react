import React from 'react';
import './Circle.css';
/*import {UIUtil} from "../../../../src/utils/UIUtil";
import {MatrixMath} from "../../../../src/utils/MatrixMath";

let onMouseOver = () => {
    UIUtil.showArrow(i, tableHeads, imageElement)
};
let onMouseLeave = () => {
    UIUtil.removeArrow(i, tableHeads)
};*/

export default function Circle(props) {

  return <div className="cell">
    <div className={props.value == null ? "circle" : props.value}/>
  </div>

}
