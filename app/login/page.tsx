import React from 'react';
import { signIn } from '../libs/auth';

const email = 'pkvarg@yahoo.se';
const password = '123';

const login = async (e: any) => {
  e.preventDefault();
  await signIn('credentials', { email, password, redirect: false });
};

const page = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <div className="h-[100vh] bg-black text-white">
      <p>Login</p>
      {/* <form onSubmit={login} className="flex w-[25%] flex-col gap-2">
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
          placeholder="name"
          onChange={(e) => setPassword(e.target.value)}
          className="pl-1 text-blue-950"
        />
        <button type="submit" className="cursor-pointer text-green-500">
          Login
        </button>
      </form> */}
    </div>
  );
};

export default page;
