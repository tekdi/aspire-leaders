'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import loginImg from '../../public/assets/aspireLogo.png';

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
    router.push('/applicationForm');
  };

  const success = (response: any) => {
    console.log('Login successful', response);
  };

  return (
    <Login
      loginImg={loginImg}
      loginText={'Log In'}
      projectName="2025 Aspire Leaders Program"
      handleHomeRedirect={dashboard}
      onLoginSuccess={success}
      handleRedirect={forgotPasswordAPI}
    />
  );
};

export default LoginPage;
