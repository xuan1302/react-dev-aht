import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
    });

    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField label='todo' name='title' form={form} />
        </form>
    );
}

export default TodoForm;