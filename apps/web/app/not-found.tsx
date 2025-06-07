import { Home } from '@/components/ui/icons/general';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex items-center justify-center px-5">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-dark mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you&apos;re looking for seems to have gone on a job hunt of its own.
          Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
