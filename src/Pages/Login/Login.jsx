import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import image from '../../assets/images/banner/banner1.jpg';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const {signIn} = useContext(AuthContext)




    const handleLogin = (data) => {
        console.log(data);
        console.log(errors.password);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {

                console.log(result.user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }

    const handleGoogleLogin = () =>{

        console.log('hello google user .... working ....');
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 rounded' src={image} alt="login_Image" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-2xl">Email</span></label>
                            <input type='email' className="input input-bordered w-full" {...register("email", { required: "Email is required", maxLength: { value: 30, message: "Lessthen 30 character" } })}
                            />
                            {errors.email && <p className='text-red-600' >{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text text-2xl">Password</span></label>
                            <input type='password' className="input input-bordered w-full " {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 character" } })}
                            />

                            <label htmlFor="forgotPassword_model" className="label"><span className="label-text">Forgot Password</span></label>

                            {errors.password && <p className='text-red-600' >{errors.password?.message}</p>}
                        </div>
                        <input className="input input-bordered w-full btn-accent " type="submit" value="Login" />

                        <div>
                            {loginError && <p className='text-red-600' >{loginError}</p>}
                        </div>

                    </form>
                    <p className='my-2 text-center'>New Student <Link to='/registration' className='text-secondary' >Create new account</Link>  </p>
                    <div className='divider' >OR</div>
                    <input onClick={handleGoogleLogin} className='btn w-full' value='CONTINUE WITH GOOGLE' ></input>
                </div>
            </div>
        </div>
    );
};

export default Login;