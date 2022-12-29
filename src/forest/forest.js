import "./forest.css";

import tree3 from "./images/tree3.png";
import stone1 from "./images/stone1.png";
import tree2 from "./images/tree2.png";
import branch1 from "./images/branch1.png";
import forest from "./images/forest.jpg";
import river from "./images/river.png";
const Forest = () => {
    return ( 
    
    <div className="forest">
{/*         <div className="forest_test">
        </div> */}
        <div className="forest_branch">
            <img src={branch1} alt="dddd" />
        </div>
        <div className="forest_stone1">
            <img src={stone1} alt="" />
        </div>
        <div className="forest_tree">
             <img src={tree3} alt="dddd" /> 
        </div>
        <div className="forest_tree2">
            <img src={tree2} alt="dddd" />
        </div>

    </div> );
}
 
export default Forest;