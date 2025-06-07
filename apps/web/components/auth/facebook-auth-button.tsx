'use client';

import { Button } from '../ui/button';
import { Facebook } from '../ui/icons/social';

export const FacebookAuthButton = () => {
  const handleFacebookSignIn = () => {
    console.log('Facebook sign-in clicked');
  };

  return (
    <Button
      icon={<Facebook className="fill-current" />}
      variant="icon"
      onClick={handleFacebookSignIn}
      size="md"
    />
  );
};
