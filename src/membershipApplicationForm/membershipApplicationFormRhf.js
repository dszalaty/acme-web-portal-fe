import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    fullName: yup.string().required('Each membership application must specify applicant full name')
});

const MembershipApplicationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        e.preventDefault();

        // alert(JSON.stringify(data));

        try {
            let res = await fetch('https://httpbin.org/post', {
                method: 'POST',
                body: JSON.stringify(data),
        });
        let resJson = await res.json();
        if (res.status === 200) {

        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='fullName'>Full name</label>
                <input
                    id='fullName'
                    placeholder='Full name'
                    {...register('fullName')}
                />
                {errors.fullName?.message}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MembershipApplicationForm;