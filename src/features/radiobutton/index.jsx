import React, { useState } from 'react';

const radioButton = [
    {
        id: 1,
        name: 'Radio 1',
    },
    {
        id: 2,
        name: 'Radio 2',
    },
    {
        id: 3,
        name: 'Radio 3',
    },
]
function RadioButtonFeature(props) {

    const [job, setJob] = useState();
    console.log(job);
    const handleCheckedRadio = (id) => {
        setJob(id);
    }
    return (
        <div className='list-radio'>
            {
                radioButton.map(item => (
                    <div key={item.id} className='item'>
                        <input
                            type="radio"
                            checked={item.id === job}
                            onChange={() => handleCheckedRadio(item.id)}
                        />
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
}

export default RadioButtonFeature;