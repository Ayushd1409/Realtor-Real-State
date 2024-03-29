import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';
const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    function handleChange(e) {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email)
            toast.success("Email was sent");

        } catch (error) {
            toast.error("Email not found!");
        }
    }
    return (
        <section>
            <h1 className='text-3xl text-center font-Times_New_Roman font-semibold mt-6'>Forgot password</h1>

            <div className='flex justify-center flex-wrap items-center py-12 px-6 lg:max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6' >
                <img className='w-full rounded-2xl' src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="key" />
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-12'>
                    <form onSubmit={onSubmit}>
                        <input className='w-full py-2 px-4 text-gray-700 bg-white text-xl rounded border-gray-300 transition ease-in-out mb-6' type='email' name="" id="email" placeholder='Email ' value={email} onChange={handleChange} />
                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                            <p className='mb-6'>Don't have  a acoount ?
                                <Link to="/sign-up " className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'> Register</Link>
                            </p>
                            <p>
                                <Link to="/sign-in" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Sign in intstead?</Link>
                            </p>
                        </div>


                        <button className='w-full bg-blue-600 text-white py-3 px-7 font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-xl active:bg-blue-800' type='submit'>Send reset password</button>
                        <div className='flex items-center my-4
                    before:border-t before:flex-1 before:border-gray-300
                    after:border-t after:flex-1 after:border-gray-300'>
                            <p className='text-center font-semimold mx-4'>OR</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;