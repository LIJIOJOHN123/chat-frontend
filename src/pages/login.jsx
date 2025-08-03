import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // handle email login here
    console.log('Logging in with:', { email, password });
  };

  const handleGoogleLogin = () => {
    // add Google auth logic
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    // add Facebook auth logic
    console.log('Facebook login clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-3"
        >
          Sign in with Gmail
        </button>

        <button
          onClick={handleFacebookLogin}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mb-6"
        >
          Sign in with Facebook
        </button>

        <form onSubmit={handleEmailLogin}>
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

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
          >
            Login with Email
          </button>
        </form>
      </div>
    </div>
  );
}
