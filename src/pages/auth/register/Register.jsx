import { Button } from '@mui/material'
import React from 'react'
import TooltipError from '../../../components/tooltipError/TooltipError'
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../../utils/schema';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm({
        resolver: yupResolver(signupSchema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center">Register</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4 font-playfair">
                    <div className="flex-1">
                        <label className="block text-gray-700 text-xs">First Name</label>
                        <input
                            type="text"
                            {...register('firstName')}
                            className={`mt-1 p-2 w-full border rounded ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.firstName && <TooltipError message={errors.firstName.message} />}
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 text-xs">Surname</label>
                        <input
                            type="text"
                            {...register('surname')}
                            className={`mt-1 p-2 w-full border rounded ${errors.surname ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.surname && <TooltipError message={errors.surname.message} />}
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 text-xs">Email Address</label>
                    <input
                        type="email"
                        {...register('email')}
                        className={`mt-1 p-2 w-full border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <TooltipError message={errors.email.message} />}
                </div>
                <div className='mb-12'>
                    <label className="block text-gray-700 text-xs">Password</label>
                    <input
                        type="password"
                        {...register('password')}
                        className={`mt-1 p-2 w-full border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.password && <TooltipError message={errors.password.message} />}
                </div>


                <Button type="submit" className="w-full mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg">
                    Sign Up
                </Button>
            </form>
        </div>
        </div>
        
    )
}

export default Register