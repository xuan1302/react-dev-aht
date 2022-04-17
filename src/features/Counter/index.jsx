import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';


function CounterFeature(props) {
    const count = useSelector(state => state.count);
    const dispath = useDispatch();
    const handleIncrease = () => {
        const action = increase();
        dispath(action)
    }
    const handleDecrease = () => {
        const action = decrease();
        dispath(action)
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <div>
                <button
                    onClick={handleIncrease}
                >Increase</button>
                <button
                    onClick={handleDecrease}
                >Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;