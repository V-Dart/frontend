import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

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
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  // Helper to determine if input is filled
  const isFilled = (val) => val && val.length > 0;

  return (
    <div className="min-h-screen h-screen flex justify-end items-center bg-[#0f172a] font-sans p-0 overflow-hidden">
      <div className="mr-0 ml-0 mt-0 mb-0 max-w-[500px] w-full bg-[#1e293b] p-10 rounded-[4px] shadow-lg border-none h-full overflow-visible select-none flex flex-col justify-center">
        <h2 className="mb-7 text-3xl font-extrabold text-white text-center tracking-tight">
          Login With Your Account
        </h2>
        <form className="flex flex-col gap-[22px]" onSubmit={handleSubmit} autoComplete="off">
          {/* Email Field with floating label */}
          <div className="relative w-full box-border flex flex-col">
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full box-border pt-[22px] pb-[10px] px-4 text-base border-[1.5px] border-[#334155] rounded-[10px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] peer`}
              placeholder=" "
              required
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className={`absolute left-4 bg-transparent pointer-events-none transition-all font-medium z-20
                ${isFilled(form.email)
                  ? 'top-[3px] left-[14px] text-[0.80rem] text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                  : 'top-[18px] text-base text-[#94a3b8]'}
                peer-focus:top-[3px] peer-focus:left-[14px] peer-focus:text-[0.80rem] peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)]
                peer-placeholder-shown:top-[18px] peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#94a3b8]`}
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
              className={`w-full box-border pt-[22px] pb-[10px] px-4 text-base border-[1.5px] border-[#334155] rounded-[10px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 pr-[38px] focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] peer`}
              placeholder=" "
              required
              autoComplete="current-password"
            />
            <label
              htmlFor="password"
              className={`absolute left-4 bg-transparent pointer-events-none transition-all font-medium z-20
                ${isFilled(form.password)
                  ? 'top-[3px] left-[14px] text-[0.80rem] text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                  : 'top-[18px] text-base text-[#94a3b8]'}
                peer-focus:top-[3px] peer-focus:left-[14px] peer-focus:text-[0.80rem] peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)]
                peer-placeholder-shown:top-[18px] peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#94a3b8]`}
            >
              Password
            </label>
            <button
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-none border-none p-0 m-0 cursor-pointer outline-none flex items-center z-30"
              onClick={togglePassword}
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
        <div className="flex items-center my-7 text-center text-[#94a3b8] font-semibold text-base w-full">
          <div className="flex-1 h-px bg-[#334155]" />
          <span className="px-3">or sign in with</span>
          <div className="flex-1 h-px bg-[#334155]" />
        </div>
        <div className="flex gap-[14px] justify-center mt-2">
          <button
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-colors"
            aria-label="Sign in with Google"
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
        <div className="mt-[22px] text-center text-[#94a3b8] text-base">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 font-semibold ml-1 hover:text-blue-400 hover:underline"
          >
            Signup
          </Link>
        </div>
      </div>
      <style>{`
        input[type='password']::-ms-reveal,
        input[type='password']::-ms-clear {
          display: none;
        }
        input[type='password']::-webkit-credentials-auto-fill-button,
        input[type='password']::-webkit-input-password-reveal-button {
          display: none !important;
        }
        input[type='password']::-webkit-input-password-reveal {
          display: none !important;
        }
        input[type='password']::-o-input-password-reveal-button {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
