'use client';
import React, { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e: any) => {
    e.preventDefault();
    const signInResult = await signIn('Credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: `${window.location.origin}/auth`,
    });
  };
  return (
    <form onSubmit={login} className="flex w-[25%] flex-col gap-2">
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        className="pl-1 text-blue-950"
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className="pl-1 text-blue-950"
      />
      <button type="submit" className="cursor-pointer text-green-500">
        Login
      </button>
      <button
        onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })}
        className="cursor-pointer text-green-500"
      >
        Logout
      </button>
    </form>
  );
};

export default SignInForm;
