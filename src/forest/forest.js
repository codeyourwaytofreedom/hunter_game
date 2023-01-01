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
import main_parrot from "./images/main_parrot.png";

const Forest = () => {

    const [coors, setCoors] = useState([]);
    const [hit, setHit] = useState("");
    const shot = new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/db/Crush8-Bit.ogg');
    const [rounds, setRounds] = useState(20);
    const [score, setScore] = useState(0);
    const [modal, setModal] = useState(false)

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
            if(rounds===1)
            {
                setModal(true);
            }
        }
          
        document.addEventListener('mousemove', handleWindowMouseMove);
        document.addEventListener('click', play_shot);
        return () => {
          document.removeEventListener('mousemove', handleWindowMouseMove);
          document.removeEventListener('click', play_shot);
        };
      });

    const ranRange = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const ranInt = (max) => {
        return Math.floor(Math.random() * max);
    }


   // const [parrots, setParrots] = useState([ranInt(6), ranInt(6), ranInt(6)]);

    const [parrots, setParrots] = useState([
    ])

    const [more, setMore] = useState([
    ])

    const classes = [
                    {class:"forest_serious", direction: "toleft", speed:9, point:250}, 
                    {class:"forest_raven", direction: "toright",speed:7, point:150},  
                    {class:"forest_parrot2", direction: "toleft", speed:5, point:50}, 
                    {class:"forest_parrot_effect", direction: "toright", speed:5, point:50}, 
                    {class:"forest_red", direction: "toleft", speed:10, point:300},
                    {class:"forest_parrot3", direction: "toright", speed:6, point:100},
        ]

    useEffect(() => {
        const move = setTimeout(() => {
            setParrots([...parrots, ...[classes[0],classes[5]]]);
        }, 2000);

        const addmore = setTimeout(() => {
            setMore([...more, classes[2]]);
        }, 3000);

        if(rounds === 0)
        {
            clearTimeout(move);
            clearTimeout(addmore)
        }
    });

    const [time, setTime] = useState(0)

    useEffect(() => {
        
    const restart = setTimeout(() => {
        setTime(time+1)
    }, 1000);

        if(time === 60)
        {
            clearTimeout(restart)
        }
      }, [time]);

    

    return ( 
    <>
    
    <div className="forest">

        {
           parrots && parrots.map(e => 
                <Parrot
                className={e.class} 
                direction={e.direction} 
                score={score} 
                setScore={setScore} 
                speed={e.speed}
                point={e.point}
            />
            )
        }
        {
           more && more.map(e => 
                <Parrot
                className={e.class} 
                direction={e.direction} 
                score={score} 
                setScore={setScore} 
                speed={e.speed}
                point={e.point}
            />
            )
        }
                   

{/*         <Parrot className={"forest_parrot_effect"} 
                direction={"toright"} 
                score={score} 
                setScore={setScore} 
                speed={6}
                point={50}
        />

        <Parrot className={"forest_parrot3"} 
                direction={"toright"} 
                score={score} 
                setScore={setScore} 
                speed={6}
                point={50}
        />

        <Parrot className={"forest_serious"} 
                direction={"toleft"} 
                score={score} 
                setScore={setScore} 
                speed={4}
                point={100}
        />

        <Parrot className={"forest_raven"} 
                direction={"toright"} 
                score={score} 
                setScore={setScore} 
                speed={5}
                point={200}
        />

        <Parrot className={"forest_red"} 
                direction={"toleft"} 
                score={score} 
                setScore={setScore} 
                speed={4}
                point={400}
        /> */}


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
        <h1>{time}</h1>

        <div className="forest_the_end" style={{display: modal ? "grid" : "none"}}>
            <div className="forest_the_end_kernel">
                <div className="forest_the_end_kernel_image">
                    <img src={main_parrot} alt="egeg" />
                </div>
                <div className="forest_the_end_kernel_feedback">
                    <div id="ammo">
                        Run out of ammo!
                    </div>
                    <div id="score">
                        Score: {score}
                    </div>
                    <div id="mock">
                        {
                            score > 500 && score < 900 ? "Future Prospect" :
                            score > 900 && score < 1200 ? "You are some hunter!":
                            score > 1500 ? "I wouldn't want to confront you" : "You suck at hunting dude!" 
                        }
                    </div>
                    <div id="restart" onClick={() => {setModal(false); setRounds(21); setScore(0)}}>
                        Restart
                    </div>
                </div>
                
            </div>
        </div>



    </div>
        
    
    
    </> );
}
 
export default Forest;