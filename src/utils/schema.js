import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
  });

  export const signupSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    surname: yup.string().required('Surname is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
    .string()
    .required('Password Required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'),
  });
  