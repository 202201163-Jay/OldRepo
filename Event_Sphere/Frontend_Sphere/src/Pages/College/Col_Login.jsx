import React from 'react';

export const Col_Login = () => {
  return (
    <div className="w-full px-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Welcome Back!</h2>
        <h2 className="text-2xl font-bold">Login to your Account</h2>
        <h3 className="mt-2">It's nice to see you again. Ready to conquer?</h3>
      </div>
      <div className="flex flex-col items-center">
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Your Work email" required />
          <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Your Password" required />
          <div className='flex justify-center'>
            <button className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Log In</button>
          </div>
          
        </form>
      </div>
      <div className="text-center mt-4">
        <h3>Don't have an account? <a className="text-blue-500 hover:underline" href="/college-register">Sign Up</a></h3>
      </div>
    </div>
  );
};

