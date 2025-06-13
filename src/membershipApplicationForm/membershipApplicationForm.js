import React from 'react';
import { useForm } from 'react-hook-form';

const INITIAL_STATE = {
    fullName: '',
    birthDate: '',
}
const VALIDATION = {
    fullName: [
        {
            isValid: (value) => !!value,
            message: 'Each membership application form must specify applicant full name.'
        },
    ],
    // birthDate: '',
}

const getInvalidFields = (form) =>
    Object.keys(form).reduce((acc,key) => {
        if (!VALIDATION[key]) return acc;

        const errorsPerField = VALIDATION[key].map((validation => ({
            isValid: validation.isValid(form[key]),
            message: validation.message
        })))
        .filter((errorPerField) => !errorPerField.isValid);
        
        return {...acc, [key]: errorsPerField};
    }, {});

const MembershipApplicationForm = ({onSubmit}) => {
    const [form, setForm] = React.useState(INITIAL_STATE);

    const invalidFields = getInvalidFields(form);
    console.log(invalidFields);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formInvalid = Object.values(invalidFields).flat().length > 0;
        if (formInvalid) return;

        alert(form.fullName + ', ' + form.birthDate);
        setForm(INITIAL_STATE);
    };
    
    return (
        <form class="form" onSubmit={handleSubmit}>
            <div class="input">
                <label htmlFor='fullName'>Full name</label>
                <input id="fullName" type="text" value={form.fullName} onChange={handleChange}/>
                {invalidFields.fullName?.length ? (
                    <span class="error-message">{invalidFields.fullName[0].message}</span>
                ) : null}
            </div>
            <div class="input">
                <label htmlFor='birthDate'>Birth date</label>
                <input id="birthDate" type="text" value={form.birthDate} onChange={handleChange}/>
            </div>
            <button class="button" type="submit" disabled={formInvalid}>Submit</button>
        </form>
    );
    
};

export default MembershipApplicationForm;