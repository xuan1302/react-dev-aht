
import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../../userSlice';
import { SnackbarProvider, useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';


function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            //close form dang ky
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog()
            }

        } catch (error) {
            console.log('Fail', error);
            enqueueSnackbar('Register error', { variant: 'error' });
        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;