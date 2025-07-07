import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-profile.png';
import illustration from '../assets/Signin.png';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    console.log('Login form submitted:', form);
    navigate('/dashboard');
  };

  const isFilled = (val) => val && val.length > 0;

  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row bg-[#0f172a] font-sans p-0 overflow-hidden">
      {/* Left Panel: Illustration and Info (now first) */}
      <div className="hidden lg:flex w-1/2 min-w-[300px] bg-[#0f172a] flex-col items-center justify-center px-0 py-8 lg:px-0 lg:py-10">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center gap-3 mb-8 w-full pl-8 md:pl-12 justify-start">
            <img src={logo} alt="Logo" className="h-10" />
            <h1 className="text-white text-2xl font-bold">VLink CRM</h1>
          </div>
          {/* Illustration */}
          <div className="flex justify-center mb-6 mt-[-32px] w-full">
            <img src={illustration} alt="Illustration" className="w-[600px] h-[500px] object-contain mx-auto" />
          </div>
          {/* Quote */}
          <div className="text-center text-[#94a3b8] text-base leading-relaxed mt-[-28px] w-full flex flex-col items-center">
            <p className="italic text-[1rem]">“Smart workflows. Smarter decisions.”</p>
            <p className="text-[0.95rem] mt-1">Empower your supply chain from the very first login.</p>
          </div>
        </div>
      </div>
      {/* Right Panel: Login Form (now second, right end) */}
      <div className="w-full flex justify-end items-stretch h-screen px-0 py-0 lg:w-1/2 lg:py-0 lg:pr-0 lg:pl-0">
        <div className="w-full max-w-[500px] bg-[#1e293b] p-6 sm:p-8 md:p-10 rounded-none lg:rounded-[4px] shadow-none border-none h-full overflow-visible select-none flex flex-col justify-center signup-container-no-margin mr-0 ml-0 outline-none" tabIndex={-1}>
          <h2 className="mb-7 text-3xl font-extrabold text-white text-center tracking-tight leading-tight">
            Login With Your Account
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            {/* Email Field with floating label */}
            <div className="relative w-full box-border flex flex-col">
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full box-border pt-4 pb-2 px-4 text-base border border-[#334155] rounded-[8px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.15)] peer`}
                placeholder=" "
                required
                autoComplete="email"
              />
              <label
                htmlFor="email"
                className={`absolute bg-transparent pointer-events-none transition-all font-semibold z-20
                  ${isFilled(form.email)
                    ? 'top-0.5 left-4 text-sm text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                    : 'top-1/2 left-4 -translate-y-1/2 text-base text-[#94a3b8]'}
                  peer-focus:top-0.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)] peer-focus:-translate-y-0
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#94a3b8]`}
              >
                Email
              </label>
            </div>
            {/* Password Field with floating label */}
            <div className="relative w-full box-border flex flex-col">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                className={`w-full box-border pt-4 pb-2 px-4 text-base border border-[#334155] rounded-[8px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 pr-8 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.15)] peer`}
                placeholder=" "
                required
                autoComplete="current-password"
              />
              <label
                htmlFor="password"
                className={`absolute bg-transparent pointer-events-none transition-all font-semibold z-20
                  ${isFilled(form.password)
                    ? 'top-0.5 left-4 text-sm text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                    : 'top-1/2 left-4 -translate-y-1/2 text-base text-[#94a3b8]'}
                  peer-focus:top-0.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)] peer-focus:-translate-y-0
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#94a3b8]`}
              >
                Password
              </label>
              <button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-none border-none p-0 m-0 cursor-pointer outline-none flex items-center z-30"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg
                    className={`w-[26px] h-[26px] text-[#94a3b8] transition-colors drop-shadow-none
                      ${(passwordFocused || isFilled(form.password)) ? 'text-blue-600 drop-shadow-[0_0_6px_#2563eb]' : ''}
                      hover:text-blue-600 focus:text-blue-600 hover:drop-shadow-[0_0_6px_#2563eb] focus:drop-shadow-[0_0_6px_#2563eb]`
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    className={`w-[26px] h-[26px] text-[#94a3b8] transition-colors drop-shadow-none
                      ${(passwordFocused || isFilled(form.password)) ? 'text-blue-600 drop-shadow-[0_0_6px_#2563eb]' : ''}
                      hover:text-blue-600 focus:text-blue-600 hover:drop-shadow-[0_0_6px_#2563eb] focus:drop-shadow-[0_0_6px_#2563eb]`
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06" />
                    <path d="M1 1l22 22" />
                  </svg>
                )}
              </button>
            </div>
            {error && (
              <div className="text-[#f87171] bg-[#1e293b] rounded-[6px] py-2 px-3 text-[0.95rem] mb-1 text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full mt-[10px] py-[15px] text-[1.1rem] font-extrabold text-white bg-blue-600 rounded-[10px] border-none cursor-pointer transition-colors duration-200 shadow-md tracking-wide hover:bg-blue-700 hover:shadow-lg"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center my-4 text-center text-[#94a3b8] font-semibold text-base w-full signup-divider-responsive">
            <div className="flex-1 h-px bg-[#334155]" />
            <span className="px-3">or sign in with</span>
            <div className="flex-1 h-px bg-[#334155]" />
          </div>
          <div className="flex gap-[10px] justify-center mt-1 signup-socials-responsive">
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-colors"
              aria-label="Sign in with Google"
              onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}
            >
              <svg
                className="w-[22px] h-[22px] fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544.3"
              >
                <path
                  fill="#fff"
                  d="M533.5 278.4c0-18.9-1.6-37-4.7-54.5H272v103.1h146.9c-6.3 34.2-25.6 63.3-54.8 82.8v68h88.5c51.7-47.7 81.9-117.8 81.9-199.4z"
                />
                <path
                  fill="#fff"
                  d="M272 544.3c73.7 0 135.7-24.5 180.9-66.7l-88.5-68c-24.6 16.5-56 26-92.4 26-71 0-131.2-47.9-152.8-112.3h-90.7v70.6c45.3 89.4 138 150.4 243.5 150.4z"
                />
                <path
                  fill="#fff"
                  d="M119.2 323.3c-10.2-30.6-10.2-63.8 0-94.4v-70.6h-90.7c-39.4 77.2-39.4 169.7 0 246.9l90.7-70.6z"
                />
                <path
                  fill="#fff"
                  d="M272 107.7c39.8-.6 77.8 14 106.7 40.4l80-80C408.4 24.4 345.1 0 272 0 166.5 0 73.8 60.9 28.5 150.4l90.7 70.6c21.6-64.4 81.8-112.3 152.8-112.3z"
                />
              </svg>
              Google
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-colors"
              aria-label="Sign in with LinkedIn"
              onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}
            >
              <svg
                className="w-[22px] h-[22px] fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
              </svg>
              LinkedIn
            </button>
          </div>
          <div className="mt-3 text-center text-[#94a3b8] text-base signup-bottom-responsive">
            Don't have an account?
            <Link
              to="/signup"
              className="text-blue-600 font-semibold ml-1 hover:text-blue-400 hover:underline"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        html, body {
          overflow: hidden !important;
        }
        .signup-container-no-margin:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}
