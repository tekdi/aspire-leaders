'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Login = dynamic(
  () => import('../../../../mfes/authentication/src/pages/login'),
  {
    ssr: false,
  },
);

const LoginPage = () => {
  const router = useRouter();

  const forgotPasswordAPI = () => {
    router.push('/password-forget');
  };

  const dashboard = () => {
    router.push('/dashboard');
  };

  const success = (response: any) => {
    console.log('Login successful', response);
  };

  return (
    <Login
      handleHomeRedirect={dashboard}
      onLoginSuccess={success}
      handleRedirect={forgotPasswordAPI}
    />
  );
};

export default LoginPage;
