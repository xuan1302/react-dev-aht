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



RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object({
        fullName: yup.string().required('Please enter fullname').test('Should has at least two words', 'Please enter at lease two word.', (value) => {
            return value.split(' ').length >= 2;
        }),
        email: yup.string().required('Please enter your email.').email('Please enter a valid email address'),
        password: yup.string().required('Please enter password').min(6, 'Please enter least 6 character'),
        retypePassword: yup.string().required('Please retype your password').oneOf([yup.ref('password')], 'Password does not match'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
                Create Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField label='Full Name' name='fullName' form={form} />
                <InputField label='Email' name='email' form={form} />
                <PasswordField label='Password' name='password' form={form} />
                <PasswordField label='Retype Password' name='retypePassword' form={form} />

                <Button type='submit' variant='contained' color='primary' className='btn-submit-form'>
                    Create An Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;