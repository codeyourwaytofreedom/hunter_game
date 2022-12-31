import { useEffect, useState } from "react";

const Parrot = ({className, direction,setScore, score}) => {
    const {innerWidth, innerHeight} = window;
    const starting_point = ranInt(innerHeight);

    const [angle, setAngle] = useState(
                                        starting_point > innerHeight/2 && direction === "toright" || 
                                        starting_point < innerHeight/2 && direction === "toleft"  ? ranRange(15,25) :
                                        
                                        starting_point < innerHeight/2 && direction === "toright" ||
                                        starting_point > innerHeight/2 && direction === "toleft" ?  -ranRange(15,25) : 
                                        0
    );


    const [random_cor, setRandomcor] = useState([0,starting_point]);
    const [hit, setHit] = useState(false);


    function ranInt(max) {
        return Math.floor(Math.random() * max);
    }

    function ranRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const [step, setStep] = useState(1)
    const [vertical, setVertical] = useState(starting_point > innerHeight/2 ? -1 : 1)
    const [bang, setBang] = useState("");

    

    useEffect(() => {
            if (random_cor[1] > (innerHeight-50) && !hit) {setVertical(-1);setAngle(-angle)}  
            if (random_cor[1] < 10 && !hit) {setVertical(1); setAngle(-angle)} 

            const move = setTimeout(() => {
            setRandomcor([random_cor[0]+step, random_cor[1]+vertical])

            }, 10);

            if(random_cor[0] > innerWidth)
            {
                console.log("passed")
                clearTimeout(move)
            }  
    }, [random_cor]);


    const handle_hit = () => {
        setAngle(direction === "toright" ? -80 : 80);
        setHit(true);
        setScore(score+50)
        setVertical(4.9);
        setStep(1);
        setBang("bang");
        setTimeout(() => {
            setBang("")
        }, 400);
    }
    

    return ( 
        <div className={hit ? `${className}_dead` : `${className}` } 
                style={{

                    left: direction === "toright" ? random_cor[0] : null, 
                    right: direction === "toleft" ? random_cor[0] : null,
                    transform:`rotate(${-angle}deg)`,
                    top:random_cor[1]}} 
                
                onClick={handle_hit}>
                
                <div id={bang} style={{position:"absolute", width:"100%", height:"100%", 
                             display:"grid", justifySelf:"center", alignSelf:"center"}}>
                </div>

                {/* <h1>{String(angle).substring(0,2)}</h1> */}
        </div>
     );
}
 
export default Parrot;