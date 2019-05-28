import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required').min(8)
});
export const inviteValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required')
});
export const forgetPasswordValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required')
});

export const RegisterValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name  is required').min(3),
    lastName: Yup.string()
        .required('Last name is required').min(3),
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required').min(8),
    passwordConfirmation: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
export const SetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required').min(8),
    passwordConfirmation: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const editEmailValidationSchema = Yup.object().shape({

    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),

});