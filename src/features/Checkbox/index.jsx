import React, { useState } from 'react';

const listCheckBox = [
    {
        id: 1,
        name: 'Checkbox 1',
    },
    {
        id: 2,
        name: 'Checkbox 2',
    },
    {
        id: 3,
        name: 'Checkbox 3',
    },
    {
        id: 4,
        name: 'Checkbox 4',
    },
]
function CheckboxFeature(props) {
    const [listjob, setListJob] = useState([]);
    console.log(listjob);
    const handleCheckBox = (id) => {
        setListJob(prev => {
            const isChecked = prev.includes(id);
            if (isChecked) {
                return prev.filter(item => item != id)
            } else {
                return [...prev, id]
            }

        })
    }
    return (
        <div className='listchekckbox'>
            {
                listCheckBox.map(item => (
                    <div key={item.id}>
                        <input
                            type='checkbox'
                            checked={listjob.includes(item.id)}
                            onChange={() => handleCheckBox(item.id)}
                        />
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
}

export default CheckboxFeature;