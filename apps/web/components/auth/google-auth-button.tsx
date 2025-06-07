'use client';

import { Button } from '../ui/button';
import { Google } from '../ui/icons/social';

export const GoogleAuthButton = () => {
  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  return (
    <Button
      icon={<Google className="fill-current" />}
      variant="icon"
      onClick={handleGoogleSignIn}
      size="md"
    />
  );
};
