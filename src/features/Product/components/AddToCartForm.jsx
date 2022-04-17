import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, makeStyles, Typography } from '@mui/material';
import QuantityField from '../../../components/form-controls/QuantityField';

AddToCartForm.propTypes = {

};

function AddToCartForm({ onSubmit = null }) {
    const schema = yup.object({
        quantity: yup.number().min(1, 'Nhap so luong it nha 1').required('Nhap so luong mua').typeError('Please enter number'),
    });
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (values) => {
        if (handleSubmit) {
            await onSubmit(values)
        }
        // form.reset()
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField label='Quantity' name='quantity' form={form} />

            <Button type='submit' variant='contained' color='primary' className='btn-submit-form'>
                Buy
            </Button>
        </form>
    );
}

export default AddToCartForm;