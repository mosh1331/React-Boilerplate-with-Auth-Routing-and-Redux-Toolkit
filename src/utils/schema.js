import * as yup from 'yup';

// Common validation rules
const emailValidation = yup
  .string()
  .email('Invalid email format')
  .required('Email is required');

const passwordValidation = yup
  .string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters long');

const strongPasswordValidation = passwordValidation.matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  'Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
);

const nameValidation = yup
  .string()
  .required('${path} is required')
  .matches(/^[a-zA-Z\s]+$/, '${path} should only contain alphabets and spaces');


  // Schema Definitions
export const loginValidationSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

const strongPasswordSignupSchema = yup.object().shape({
  firstName: nameValidation.label('First Name'),
  surname: nameValidation.label('Surname'),
  email: emailValidation,
  password: strongPasswordValidation,
});

const basicSignupSchema = yup.object().shape({
  firstName: nameValidation.label('First Name'),
  surname: nameValidation.label('Surname'),
  email: emailValidation,
  password: passwordValidation,
});


export const signupSchema = strongPasswordSignupSchema;