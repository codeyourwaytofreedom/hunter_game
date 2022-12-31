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
import Parrot from "./parrot";

const Forest = () => {

    const [coors, setCoors] = useState([]);
    const [hit, setHit] = useState("");
    const shot = new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/db/Crush8-Bit.ogg');
    const [rounds, setRounds] = useState(20);
    const [score, setScore] = useState(0)

    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
            setCoors([event.screenX, event.screenY])
        };
        const play_shot = () => {
            
            if(rounds !== 0)
            {
                setRounds(rounds-1);
                shot.play();
            }
            
        }
          
        document.addEventListener('mousemove', handleWindowMouseMove);
        document.addEventListener('click', play_shot);
        return () => {
          document.removeEventListener('mousemove', handleWindowMouseMove);
          document.removeEventListener('click', play_shot);
        };
      });



    return ( 
    <>
    
    <div className="forest">

        <Parrot className={"forest_parrot_effect"} direction={"toright"} score={score} setScore={setScore}/>

        <Parrot className={"forest_parrot_effect"} direction={"toright"} score={score} setScore={setScore}/>
         
       {/*  <Parrot className={"forest_parrot2"} direction={"toleft"} score={score} setScore={setScore}/>  */}

        <div className="magazine">
            {
                [...Array(rounds)].map(e =>
                    <div className="magazine_bullet">
                    </div>
                    )
            }
        </div>

       <h1 style={{position:"absolute", top:"0", left:"50vw"}}>
        {score}
       </h1>


        <div className="forest_branch">
            <img src={branch1} alt="dddd" />
        </div>
        <div className="forest_stone1">
            <img src={stone1} alt="" />
        </div>
{/*         <div className="forest_tree">
             <img src={tree3} alt="dddd" /> 
        </div> */}

        <div className="forest_tree1">
             <img src={tree3} alt="dddd" /> 
        </div>


        <div className="forest_tree2">
            <img src={tree2} alt="dddd" />
        </div>

        <div className="forest_ground">
            <img src={ground} alt="dddd" />
        </div>

        <div style={{position:"absolute", left:coors[0]-10, top:coors[1]-130, zIndex:"5"}}>
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