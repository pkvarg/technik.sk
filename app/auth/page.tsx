import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';

import SignInForm from '../components/SignInForm';

const AuthRoute = async () => {
  const session = await getServerSession(authOptions);

  console.log('session sign in form', session);
  return (
    <div className="h-[100vh] bg-black text-white">
      <p>Auth Login</p>
      <SignInForm />
    </div>
  );
};

export default AuthRoute;
