import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/20">
        <Home className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-extrabold text-primary font-heading mb-2">404</h1>
      <h2 className="text-xl font-bold text-on-surface mb-2">Page Not Found</h2>
      <p className="text-sm text-on-surface-variant max-w-md mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-container transition shadow-mid"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
