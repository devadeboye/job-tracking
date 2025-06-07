'use client';

import { Button } from '../ui/button';
import { Github } from '../ui/icons/social';

export const GithubAuthButton = () => {
  const handleGithubSignIn = () => {
    console.log('Github sign-in clicked');
  };

  return (
    <Button
      icon={<Github className="fill-current" />}
      variant="icon"
      onClick={handleGithubSignIn}
      size="md"
    />
  );
};
