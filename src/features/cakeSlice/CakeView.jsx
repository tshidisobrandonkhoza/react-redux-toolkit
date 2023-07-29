
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice';
import { useState } from 'react';

function CakeView() {
    //recieves state as an argument
    const [value, setValue] = useState(1);
    const numofCakes = useSelector(state => state.cake.numofCake);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes {numofCakes}</h2>
            <button onClick={() => { numofCakes >= value ? dispatch(ordered(value)) : setValue(value - (value - numofCakes)) }}>Order Cake </button>
            <input type='number' min={0} value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => { dispatch(restocked(value)) }}>Restock Cake </button>
        <p>Order cake and get a free ice</p>
        </div>
    )
}

export default CakeView
