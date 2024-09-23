import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Stu_Reg = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match');
  } else {
    try {
      const response = await fetch("http://localhost:3000/api/auth/student-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
        console.log('Error:', errorData);
      } else {
        const responsedata = await response.json();
        setError('');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        console.log(responsedata);
        navigate("/");
      }
    } catch (error) {
      console.log('Network error:', error);
      setError('Network error. Please try again later.');
    }
  }
};


  return (
    <div className="w-full px-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Join us</h2>
        <h2 className="text-2xl font-bold">Discover and Participate in Events</h2>
        <h3 className="mt-2">Be a part of our event-loving community!</h3>
      </div>

      <div className="flex flex-col items-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="w-full p-2 border rounded mb-4"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="w-full p-2 border rounded mb-4"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="w-full p-2 border rounded mb-4"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            className="w-full p-2 border rounded mb-4"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />

          {error && <p className="text-red-500 mb-4 flex justify-center">{error}</p>}

          <div className='flex justify-center'>
            <button
              className="w-1/2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
              style={{ fontWeight: '800' }}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="text-center mt-4">
        <h3>
          Already have an account?{' '}
          <a className="text-green-500 hover:underline" href="/student-login">
            Log In
          </a>
        </h3>
      </div>
    </div>
  );
};
