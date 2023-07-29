import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceSlice";

function IceView() {
    const numofIce = useSelector(state => state.ice.numofIce);
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Ice {numofIce}</h2>
            <button onClick={ () => value <= numofIce ? dispatch(ordered(value)) : setValue( value - (value - numofIce) ) }>Order Ice</button>
            <input type="number" min={0} name="numCake" id="numCake" value={value} onChange={e => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))} >Restock Ice</button>
        </div>
    )
}

export default IceView
