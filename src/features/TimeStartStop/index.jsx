import React, { useRef, useState } from 'react';


function TimeStartStop(props) {
    const [time, setTime] = useState(180);
    const idTime = useRef();
    const handleStart = () => {
        setTime.current = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(setTime.current)
    }
    return (
        <div className='timmer'>
            {time}
            <div>
                <button
                    onClick={handleStart}
                >Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
}

export default TimeStartStop;