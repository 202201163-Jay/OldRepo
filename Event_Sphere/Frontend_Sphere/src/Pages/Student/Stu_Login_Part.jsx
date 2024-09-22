import React from 'react';

export const Stu_Login = () => {
  return (
    <div className="w-full px-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Welcome Back!</h2>
        <h2 className="text-2xl font-bold">Login to your Account</h2>
        <h3 className="mt-2">Let's start exploring events tailored for you!</h3>
      </div>
      <div className="flex flex-col items-center">
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Your Email" required />
          <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Password" required />
          <div className='flex justify-center'>
            <button className="w-1/2 bg-green-500 text-white p-2 rounded hover:bg-green-600">Log In</button>
          </div>
          
        </form>
      </div>
      <div className="text-center mt-4">
        <h3>Don't have an account? <a className="text-green-500 hover:underline" href="/student-register">Sign Up</a></h3>
      </div>
    </div>
  );
};
