
import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import { SnackbarProvider, useSnackbar } from 'notistack';


function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            //close form dang ky
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog()
            }
            //hien thi thoong bao thanh cong
            enqueueSnackbar('Register success', { variant: 'success' });
        } catch (error) {
            console.log('Fail', error);
            enqueueSnackbar('Register error', { variant: 'error' });
        }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;