import React,{useState} from "react";
import "./Count.css";

function Count () {
    const [counter, setCounter] = useState(0);

    const click1 = () => {
        setCounter(counter + 1);
    };

    const click2 = () =>{
        setCounter(counter - 1);
    };

    return (
        <div className="Counter">Quantity:{counter}
            <div className="buttons">
                <button onClick={click1}>+</button>
                <button onClick={click2}>-</button>
            </div>
        </div>
    );
};

export default Count;