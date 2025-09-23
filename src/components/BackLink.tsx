import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function BackLink({ href }: { href: string }) {
  return (
    <Link href={href} className='flex -ml-3 gap-2'>
      <Button
        variant="ghost"
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>
    </Link>
  );
}