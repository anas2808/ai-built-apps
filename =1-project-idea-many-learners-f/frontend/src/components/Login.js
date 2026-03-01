```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/tailwind.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic email and password validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      // In a real application, you would make an API call to your backend here
      // Example:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();

      // Simulate API call and successful login
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network latency
      if (email === 'user@example.com' && password === 'password123') {
        localStorage.setItem('isLoggedIn', 'true');
        // In a real app, you might store a token here
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Navbar component (as defined in blueprint)
  const Navbar = () => (
    <nav className="bg-[#4A90E2] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold font-['Roboto']">SkillMirror</a>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-white hover:text-[#50E3C2] font-['Roboto']">Home</a></li>
          <li><a href="/assessments" className="text-white hover:text-[#50E3C2] font-['Roboto']">Assessments</a></li>
          <li><a href="/dashboard" className="text-white hover:text-[#50E3C2] font-['Roboto']">Dashboard</a></li>
          <li><a href="/feedback" className="text-white hover:text-[#50E3C2] font-['Roboto']">Feedback</a></li>
          <li><a href="/profile" className="text-white hover:text-[#50E3C2] font-['Roboto']">Profile</a></li>
        </ul>
      </div>
    </nav>
  );

  // Footer component (as defined in blueprint)
  const Footer = () => (
    <footer className="bg-[#333333] text-white p-6 text-center font-['Roboto'] mt-12">
      <p>© 2023 SkillMirror. All rights reserved.</p>
    </footer>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Roboto']">
      <Navbar />
      <main className="flex-grow container mx-auto p-8 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md border border-[#e0e0e0]">
          <h2 className="text-3xl font-bold text-center text-[#333333] mb-8">Login to SkillMirror</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#333333] mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[#cccccc] rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2] shadow-sm text-lg text-[#333333]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-[#333333] mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#cccccc] rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2] shadow-sm text-lg text-[#333333]"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out
                ${loading ? 'bg-[#94c4f0]' : 'bg-[#4A90E2] hover:bg-[#3c7ebf]'}`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          <div className="text-center mt-6 text-sm">
            <p className="text-[#333333]">Don't have an account? <a href="/register" className="text-[#4A90E2] hover:underline">Sign Up</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
```