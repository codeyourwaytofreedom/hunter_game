import { useEffect, useState } from "react";

const Parrot = ({className, direction}) => {
    const [random_cor, setRandomcor] = useState([0,ranInt(500)]);
    const [hit, setHit] = useState(false);
    function ranInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [step, setStep] = useState(7)
    const [vertical, setVertical] = useState(0.4)
    const [bang, setBang] = useState("");

    const move = setTimeout(() => {
        setRandomcor([random_cor[0]+step, random_cor[1]+vertical])
    }, 10);

    const handle_hit = () => {
        setHit(true);
        setVertical(4.9);
        setStep(0);
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
                    top:random_cor[1]}} 
                
                onClick={handle_hit}>
                
                <div id={bang} style={{position:"absolute", width:"100%", height:"100%", 
                             display:"grid", justifySelf:"center", alignSelf:"center"}}>
                </div>
        </div>
     );
}
 
export default Parrot;