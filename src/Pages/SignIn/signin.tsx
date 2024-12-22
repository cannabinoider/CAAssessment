import React from 'react';
import Common from '../../Components/SignInComponents/common';
import Desktop from '../../Components/SignInComponents/desktop';

export default function signin() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
    
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <Desktop />
    </div>

    <div className="w-full md:w-1/2 flex items-center justify-center">
      <Common />
    </div>
  </div>
  )
}
