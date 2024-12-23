import React from 'react';
import Common from '../../Components/SignInComponents/Common';
import Desktop from '../../Components/SignInComponents/Desktop';

export default function Signin() {
  return (
    <div className="h-screen grid grid-cols-2 max-lg:grid-cols-1">
    
        <Desktop />
        <Common />
      </div>
  );
}
