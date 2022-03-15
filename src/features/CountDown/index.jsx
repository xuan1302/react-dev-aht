import React, { useEffect, useState } from 'react';


function CountDown(props) {
    const [countDown, setCountDown] = useState(180);
    useEffect(() => {
        const timeId = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000)

        //clear function
        return () => {
            clearInterval(timeId);
        }
    }, [])

    return (
        <div className='count-down'>
            {countDown}
        </div>
    );
}

export default CountDown;