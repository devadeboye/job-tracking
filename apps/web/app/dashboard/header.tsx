import { Button } from '@/components/ui/button';
import { Plus } from '@/components/ui/icons/general';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8 mt-20">
      <div>
        <h1 className="text-2xl font-bold text-dark mb-2">Welcome back, User!</h1>
        <p className="text-gray-600">Track and manage your job applications</p>
      </div>
      <Link href="/dashboard/applications/new">
        <Button
          variant="primary"
          className="flex items-center gap-2"
          label={
            <>
              <Plus className="w-5 h-5" />
              <span className="hidden md:inline">Add Application</span>
              <span className="md:hidden">Add</span>
            </>
          }
        />
      </Link>
    </div>
  );
}
