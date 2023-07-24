import React, { useState } from 'react';

import image from '../../../assets/images/banner/banner1.jpg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registration = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data) => {

        console.log('registration data = ', data);
    }

    const handleGoogleLogin = () => {

        console.log('hello google login user.... wait a minutes....');
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={image} alt="login_Image" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-2xl">Name</span></label>
                            <input type='text' {...register('name', { required: 'Name is required' })} className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-600' >{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-2xl">Email</span></label>
                            <input type='email' {...register('email', { required: 'Email must be required', maxLength: { value: 30, message: 'Lessthen 30 character' } })} className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600' >{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text text-2xl">Password</span></label>
                            <input type='password' {...register('password', {
                                required: "Password must be required",
                                minLength: { value: 6, message: "must be 6 character", },
                                pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$&*])/, message: "Password must be Upper Character Number and special character" },
                            })} className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-600' >{errors.password.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text text-2xl">Confirm-Password</span></label>
                            <input type='password' {...register('confirm_password', {
                                required: "confirm-Password must be required",
                                minLength: { value: 6, message: "must be 6 character", },
                                pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$&*])/, message: "Password must be Upper Character Number and special character" },
                            })} className="input input-bordered w-full " />
                            {errors.confirm_password && <p className='text-red-600' >{errors.confirm_password.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>

                        <div>
                            {
                                signUpError && <p className='text-red-600'> {signUpError} </p>
                            }
                        </div>
                    </form>

                    <p className='my-2 text-center'>Already Have an account <Link to='/login' className='text-secondary' >Please Login</Link>  </p>
                    <div className='divider' >OR</div>
                    <input onClick={handleGoogleLogin} className='btn w-full' value='CONTINUE WITH GOOGLE' ></input>

                </div>
            </div>
        </div>
    );
};

export default Registration;