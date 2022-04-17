import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, makeStyles, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import './style.scss';
import PasswordField from '../../../../components/form-controls/PasswordField';



LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const schema = yup.object({
        identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address'),
        password: yup.string().required('Please enter password'),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (handleSubmit) {
            await onSubmit(values)
        }
        // form.reset()
    }
    const { isSubmitting } = form.formState;
    return (
        <div >
            {isSubmitting && <LinearProgress />}

            <Avatar className='custom-avatar'>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component='h3' variant='h5' className='title-form-register'>
                Login
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField label='Email' name='identifier' form={form} />
                <PasswordField label='Password' name='password' form={form} />

                <Button type='submit' variant='contained' color='primary' className='btn-submit-form'>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;