import React, { useReducer } from 'react';

const initState = {
    job: '',
    listJob: [],
}
const setJob = payload => {
    return {
        type: 'SETJOB',
        payload
    }
}

const addJob = payload => {
    return {
        type: 'ADDJOB',
        payload
    }
}
const deleteJob = payload => {
    return {
        type: 'DELETEJOB',
        payload
    }
}
function reducer(state, action) {
    switch (action.type) {
        case 'SETJOB':
            return {
                ...state,
                job: action.payload,
            };

        case 'ADDJOB':
            return {
                ...state,
                listJob: [...state.listJob, action.payload],
            };

        case 'DELETEJOB':
            const newListJob = [...state.listJob];
            newListJob.splice(action.payload, 1);
            return {
                ...state,
                listJob: newListJob,
            };
        default:
            throw new Error();
    }
}

function TodoListReducerFeature(props) {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, listJob } = state;
    const handleSubmit = () => {
        dispatch(addJob(job))
    }
    console.log(listJob)
    return (
        <div>
            <input
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button
                onClick={handleSubmit}
            >Add</button>
            {listJob.map((data, index) => (
                <li key={index}>{data} <button onClick={() => dispatch(deleteJob(index))}>remove</button></li>
            ))}
        </div>
    );
}

export default TodoListReducerFeature;