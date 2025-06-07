import EmailSignin from './email-signin';
import { SocialAuth } from '@/components/auth/social-auth';

export default function Signin() {
  return (
    <div className="px-5 pt-[13svh] md:px-10 lg:px-16 xl:px-20">
      <div className="flex flex-col gap-10 border border-gray-200 px-5 py-10">
        {/* header section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-dark font-bold">Welcome Back</h1>
          <p>Sign in to continue tracking your job applications</p>
        </div>

        {/* social signup section */}
        <SocialAuth />

        {/* form section */}
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-center">or sign in with Email</h2>
          <EmailSignin />
        </div>

        {/* signup link */}
        <p className="text-center">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-primary">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
