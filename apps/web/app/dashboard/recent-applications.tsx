import { Button } from '@/components/ui/button';
import { Plus } from '@/components/ui/icons/general';
import Link from 'next/link';

export default function RecentApplications() {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>

      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
          <Plus className="w-8 h-8 text-gray-400" />
        </div>

        <p className="text-gray-600 mb-2">No applications yet</p>
        <p className="text-gray-500 text-sm mb-4">Start by adding your first job application</p>

        <Link href="/dashboard/applications/new">
          <Button variant="primary" label="Add Your First Application" />
        </Link>
      </div>
    </div>
  );
}
