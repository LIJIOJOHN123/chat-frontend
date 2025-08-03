import React, { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    // Handle register logic
    console.log('Registering with:', { email, password });
  };

  const handleGoogleRegister = () => {
    // Handle Google signup logic
    console.log('Google signup clicked');
  };

  const handleFacebookRegister = () => {
    // Handle Facebook signup logic
    console.log('Facebook signup clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <button
          onClick={handleGoogleRegister}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-3"
        >
          Sign up with Gmail
        </button>

        <button
          onClick={handleFacebookRegister}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mb-6"
        >
          Sign up with Facebook
        </button>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Register with Email
          </button>
        </form>
      </div>
    </div>
  );
}
