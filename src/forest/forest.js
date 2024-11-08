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


    const [time, setTime] = useState(0)


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

    const [red, setRed] = useState([
    ])

    const [raven, setRaven] = useState([
    ])

    const classes = [
                    {class:"forest_serious", direction: "toleft", speed:10, point:350}, 
                    {class:"forest_raven", direction: "toright",speed:9, point:150},  
                    {class:"forest_parrot2", direction: "toleft", speed:7, point:150}, 
                    {class:"forest_parrot_effect", direction: "toright", speed:8, point:200}, 
                    {class:"forest_red", direction: "toleft", speed:9, point:300},
                    {class:"forest_parrot3", direction: "toright", speed:11, point:100},
        ]

    useEffect(() => {
        const move = setTimeout(() => {
            setParrots([...parrots, classes[5]]);
        }, 2000);

        const addmore = setTimeout(() => {
            setMore([...more, classes[3]]);
        }, 3000);

        const addred = setTimeout(() => {
            setRed([...red, classes[4]]);
        }, 5000);

        const addraven = setTimeout(() => {
            setRaven([...raven, classes[0]]);
        }, 6000);

        if(rounds === 0)
        {
            clearTimeout(move);
            clearTimeout(addmore);
            clearTimeout(addred);
            clearTimeout(addraven);
        }
    });


    useEffect(() => {   
        const restart = setTimeout(() => {
            setTime(time+1)
        }, 1000);

        if(time === 30)
        {
            clearTimeout(restart);
            setModal(true);
            setRounds(0)
        }
        if(modal)
        {
            clearTimeout(restart);
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
        {
           red && red.map(e => 
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
           raven && raven.map(e => 
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



        <div className="magazine">
            {
                [...Array(rounds)].map(e =>
                    <div className="magazine_bullet">
                    </div>
                    )
            }
        </div>

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

        <div className="forest_board">
            <span>{time}</span>
            <span>{score}</span> 
        </div>

        <div className="forest_the_end" style={{display: modal ? "grid" : "none"}}>
            <div className="forest_the_end_kernel">
                <div className="forest_the_end_kernel_image">
                    <img src={main_parrot} alt="egeg" />
                </div>
                <div className="forest_the_end_kernel_feedback">
                    <div id="ammo">
                        Game over!
                    </div>
                    <div id="score">
                        Score: {score}
                    </div>
                    <div id="mock">
                        {
                            score < 900 ? "You suck at hunting dude!" :
                            score > 900 && score < 1200 ? "Future Prospect" :
                            score > 1200 && score < 1700 ? "You are some hunter!":
                            score > 1700 && score <2000 ? "I wouldn't want to confront you" : "Damn! You are a warrior!" 
                        }
                    </div>
                    <div id="restart" onClick={() => {setModal(false); setRounds(21); setScore(0); setTime(0)}}>
                        Restart
                    </div>
                </div>
                
            </div>
        </div>



    </div>
        
    
    
    </> );
}
 
export default Forest;