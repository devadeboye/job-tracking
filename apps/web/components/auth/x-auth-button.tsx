'use client';

import { Button } from '../ui/button';
import { X } from '../ui/icons/social';

export const XAuthButton = () => {
  const handleXSignIn = () => {
    console.log('X sign-in clicked');
  };

  return (
    <Button
      icon={<X className="fill-current" />}
      variant="icon"
      onClick={handleXSignIn}
      size="md"
    />
  );
};
