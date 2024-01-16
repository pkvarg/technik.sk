import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import SignInButton from '../components/SignInButton';
import AdminBoard from '../components/AdminBoard';

const Admin = async () => {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name ? session.user.name.toString() : 'user';

  console.log('admin session', session);

  return (
    <div className="h-[100vh]">
      {!session ? (
        <SignInButton />
      ) : (
        <div className=" bg-black text-white">
          <AdminBoard name={name} />
        </div>
      )}
    </div>
  );
};

export default Admin;
