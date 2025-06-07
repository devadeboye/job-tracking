import EmailSignup from './email-signup';
import { SocialSignupSection } from '@/components/auth/social-signup-section';

export default function Signup() {
  return (
    <div className="px-5 pt-[13svh] md:px-10 lg:px-16 xl:px-20">
      <div className="flex flex-col gap-10 border border-gray-200 px-5 py-10">
        {/* header section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-dark font-bold">Create your Account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>

        {/* social signup section */}
        <SocialSignupSection />

        {/* form section */}
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-center">or create account with Email</h2>
          <EmailSignup />
        </div>
      </div>
    </div>
  );
}
