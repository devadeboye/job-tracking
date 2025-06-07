'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function EmailSignup() {
  return (
    <div>
      <form className="flex flex-col gap-2">
        <Input type="text" placeholder="First Name" label="First Name" />
        <Input type="email" placeholder="Email" label="Email" />
        <Input type="password" placeholder="Password" label="Password" />

        {/* terms and conditions  */}
        <div className="flex gap-3 py-5 items-start">
          <input
            type="checkbox"
            id="terms"
            className="border border-gray-100 outline-none w-4 h-4 mt-1"
          />
          <label htmlFor="terms">
            By creating an account, you agree to our{' '}
            <span className="text-primary">Terms of Service</span> and{' '}
            <span className="text-primary">Privacy Policy</span>
          </label>
        </div>

        <Button type="submit" variant="primary" label="Create Account" />
      </form>
    </div>
  );
}
