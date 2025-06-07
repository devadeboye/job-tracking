'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function EmailSignin() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <Input type="email" placeholder="Email" label="Email" />
        <Input type="password" placeholder="Password" label="Password" />

        <div className="flex justify-end">
          <a href="/forgot-password" className="text-primary text-sm">
            Forgot Password?
          </a>
        </div>

        <Button type="submit" variant="primary" label="Sign In" />
      </form>
    </div>
  );
}
