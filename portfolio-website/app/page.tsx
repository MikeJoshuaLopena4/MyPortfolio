'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has seen splash screen in this session
    const hasSeenSplash = typeof window !== 'undefined' ? sessionStorage.getItem('hasSeenSplash') : null;

    if (!hasSeenSplash) {
      // If not seen, redirect to splash screen
      router.push('/splashscreen');
    } else {
      // If already seen, redirect directly to home
      router.push('/home');
    }
  }, [router]);

  // Return an empty div while redirecting
  return <div className="min-h-screen"></div>;
}