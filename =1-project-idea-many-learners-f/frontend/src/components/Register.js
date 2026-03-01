```javascript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css'; // Ensure your main CSS file is imported

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Effect to set focus on the first input field
  useEffect(() => {
    document.getElementById('name').focus();
  }, []);

  // Function to handle user registration
  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    // Basic client-side validation
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email address is invalid.');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      // Replace with your actual API endpoint for registration
      // This assumes a POST request to '/api/register' which mimics user creation
      // In a real-world scenario, you might have a dedicated auth endpoint.
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password, // In a real app, hash the password on the backend
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle backend errors
        const errorMessage = data.error || 'Registration failed. Please try again.';
        setError(errorMessage);
        setLoading(false);
        return;
      }

      // On successful registration, navigate to login or a confirmation page
      // For simplicity, navigating to login.
      navigate('/login');

    } catch (err) {
      console.error('Registration error:', err);
      setError('An unexpected error occurred. Please check your connection or try again later.');
      setLoading(false);
    }
  };

  // Navbar component (ensure this matches the blueprint exactly)
  const Navbar = () => (
    <nav className="bg-primary p-4 shadow-md" style={{ fontFamily: 'Roboto' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">SkillMirror</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-white hover:text-secondary">Home</a></li>
          <li><a href="/assessments" className="text-white hover:text-secondary">Assessments</a></li>
          <li><a href="/dashboard" className="text-white hover:text-secondary">Dashboard</a></li>
          <li><a href="/feedback" className="text-white hover:text-secondary">Feedback</a></li>
          <li><a href="/profile" className="text-white hover:text-secondary">Profile</a></li>
        </ul>
      </div>
    </nav>
  );

  // Footer component (ensure this matches the blueprint exactly)
  const Footer = () => (
    <footer className="bg-secondary text-white p-4 mt-8" style={{ fontFamily: 'Roboto' }}>
      <div className="container mx-auto text-center">
        <p>© 2023 SkillMirror. All rights reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF', color: '#333333', fontFamily: 'Roboto' }}>
      {Navbar()}
      <main className="flex-grow container mx-auto p-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8" style={{ border: '1px solid #e0e0e0' }}>
          <h2 className="text-center text-3xl font-bold mb-6" style={{ color: '#333333' }}>Create Your Account</h2>
          <p className="text-center text-gray-600 mb-6">Unlock your potential with SkillMirror</p>
          {error && <p className="error-message mb-4 text-red-500 text-center">{error}</p>}
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
                className="input-field"
                placeholder="Create a password (min 8 characters)"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="input-field"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: '#4A90E2', color: '#FFFFFF', fontFamily: 'Roboto' }}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register Now'}
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600">Already have an account?</p>
            <a href="/login" className="text-primary hover:underline font-semibold" style={{ color: '#4A90E2' }}>Login here</a>
          </div>
        </div>
      </main>
      {Footer()}
    </div>
  );
};

export default Register;
```