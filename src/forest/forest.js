import "./forest.css";
import { useEffect, useState } from "react";

import tree3 from "./images/tree3.png";
import stone1 from "./images/stone1.png";
import tree2 from "./images/tree2.png";
import branch1 from "./images/branch1.png";
import forest from "./images/forest.jpg";
import ground from "./images/ground.png";
import target from "./images/target.png";
import dark from "./images/darkforest.png";
import line from "./images/line.png";

const Forest = () => {

    const [coors, setCoors] = useState([]);
    const [hit, setHit] = useState("");
    const [random_cor, setRandomcor] = useState([0,20]);
    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
            setCoors([event.screenX, event.screenY])
        };
          
        document.addEventListener('mousemove', handleWindowMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleWindowMouseMove);
        };
      }, []);

      useEffect(() => {
        function ranInt(max) {
            return Math.floor(Math.random() * max);
        }
        //setRandomcor([0, ranInt(600)])
      }, []);
    const step = 0.035;
    const vertical = 0;
    setTimeout(() => {
    setRandomcor([random_cor[0]+step, random_cor[1]+vertical])
    }, 1);

    return ( 
    <>
    
    <div className="forest">
{/*         <div className="forest_test" onClick={()=> setHit("HIT")}>

        </div> */}
{/*         <div className="forest_parrot2" onClick={()=> setHit("HIT")}>

        </div> */}
        <div className="forest_parrot_effect" style={{left:`${random_cor[0]}vw`, top:`${random_cor[1]}vh`}}>
            
        </div>


        <div className="forest_branch">
            <img src={branch1} alt="dddd" />
        </div>
        <div className="forest_stone1">
            <img src={stone1} alt="" />
        </div>
        <div className="forest_tree">
             <img src={tree3} alt="dddd" /> 
        </div>
        <div className="forest_tree1">
             <img src={tree3} alt="dddd" /> 
        </div>
        <div className="forest_tree2">
            <img src={tree2} alt="dddd" />
        </div>
        <div className="forest_ground">
            <img src={ground} alt="dddd" />
        </div>

        <div style={{position:"absolute", left:coors[0]-10, top:coors[1]-130, zIndex:"4"}}>
            <img src={target} alt="uuu"/>
        </div>
        <div className="forest_dark">
            <img src={dark} alt="dddd" />
        </div>
        <div className="forest_line">
        </div>

        <h1>{hit}</h1>
    </div>
        
    
    
    </> );
}
 
export default Forest;