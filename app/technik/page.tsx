import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import SignInButton from '../components/SignInButton';
import AdminBoard from '../components/AdminBoard';

const Admin = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-[100vh] bg-[#0d0e2f]">
      {!session ? (
        <SignInButton />
      ) : (
        <div className="text-white">
          <AdminBoard user={session?.user} />
        </div>
      )}
    </div>
  );
};

export default Admin;
