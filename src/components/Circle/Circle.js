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

export default function Circle() {

    return <div className="cell"><div className="circle"/></div>
    return <div /*onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                onClick={() => {
                    game.playMove(MatrixMath.getColumnIndex(i))
                }}*/
            className="circle"/>
}
