import { GoogleAuthButton } from '@/components/auth/google-auth-button';
import { XAuthButton } from '@/components/auth/x-auth-button';
import { FacebookAuthButton } from '@/components/auth/facebook-auth-button';
import { GithubAuthButton } from '@/components/auth/github-auth-button';

export function SocialSignupSection() {
  return (
    <div>
      <h2 className="text-lg text-dark">Continue with Social Accounts</h2>
      <div className="flex gap-4 mt-4">
        <div className="border border-gray-200 rounded-sm p-0.5">
          <GoogleAuthButton />
        </div>

        <div className="border border-gray-200 rounded-sm p-0.5">
          <FacebookAuthButton />
        </div>

        <div className="border border-gray-200 rounded-sm p-0.5">
          <XAuthButton />
        </div>

        <div className="border border-gray-200 rounded-sm p-0.5">
          <GithubAuthButton />
        </div>
      </div>
    </div>
  );
}
