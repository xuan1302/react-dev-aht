import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object({
        title: yup.string().required('Please enter title').min(5, 'Title to short!!'),
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (handleSubmit) {
            onSubmit(values)
        }
        form.reset()
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField label='todo' name='title' form={form} />
        </form>
    );
}

export default TodoForm;