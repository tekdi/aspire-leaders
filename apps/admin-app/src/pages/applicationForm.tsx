'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';

// Dynamically import FormBuilderComponent on the client side only
const FormBuilder = dynamic(() => import('../components/FormBuilder'), {
  ssr: false,
});
const applicationForm = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FormBuilder />
    </div>
  );
};

export default applicationForm;
