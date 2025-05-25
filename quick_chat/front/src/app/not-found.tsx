'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <Image
        src="/images/404.svg"
        alt="Not Found"
        width={500}
        height={500}
        className="mb-4"/>
        <Link href='/'>
        <Button>Back to home</Button>
        </Link>
    </div>
  );
}