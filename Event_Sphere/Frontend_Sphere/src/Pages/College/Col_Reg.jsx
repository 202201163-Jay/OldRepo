import React from 'react';

export const Col_Reg = () => {
  return (
    <div className="w-full px-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Join us</h2>
        <h2 className="text-2xl font-bold">Boost your Events</h2>
        <h3 className="mt-2">Be a part of a constantly growing community.</h3>
      </div>
      <div className="flex flex-col items-center">
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full p-2 border rounded mb-4" type="text" placeholder="College Name" required />
          <input className="w-full p-2 border rounded mb-4" type="text" placeholder="College Email" required />
          <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Password" required />
          <div className="flex justify-center">
            <button className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600" style={{fontWeight: '800' }}>
                Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="text-center mt-4">
        <h3>Already have an account? <a className="text-blue-500 hover:underline" href="/college-login">Log In</a></h3>
      </div>
    </div>
  );
};
